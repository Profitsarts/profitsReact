// usage: node render.mjs stills 0,2.5,5,7.5,10   → stills/t-*.png
//        node render.mjs video                  → vibras-explainer.mp4 (600 frames, 60 fps)
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const cache = path.join(homedir(), 'Library/Caches/ms-playwright');
const shell = readdirSync(cache).filter(d => d.startsWith('chromium_headless_shell')).sort().pop();
const exe = path.join(cache, shell, 'chrome-headless-shell-mac-arm64/chrome-headless-shell');
if (!existsSync(exe)) throw new Error('headless shell not found: ' + exe);

const [mode = 'stills', list = '0,2.5,5,7.5,10'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: exe, args: ['--allow-file-access-from-files'] }) // photo is a file:// image; without this toDataURL throws on a tainted canvas;
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', e => console.error('PAGE ERROR', e.message));
await page.goto(pathToFileURL(path.join(here, 'index.html')).href + '?capture=1');
await page.evaluate(() => window.ready);
const grab = t => page.evaluate(t => { window.render(t); return document.getElementById('c').toDataURL('image/png'); }, t)
  .then(u => Buffer.from(u.split(',')[1], 'base64'));

if (mode === 'stills') {
  mkdirSync(path.join(here, 'stills'), { recursive: true });
  for (const t of list.split(',').map(Number)) {
    writeFileSync(path.join(here, 'stills', `t-${t.toFixed(2)}.png`), await grab(t));
    console.log('still', t);
  }
} else {
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', '60', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '14', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    path.join(here, 'vibras-explainer.mp4')], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = 600;
  for (let f = 0; f < N; f++) {
    const buf = await grab(f / 60);
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % 60 === 0) console.log('frame', f);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  console.log('done');
}
await browser.close();
