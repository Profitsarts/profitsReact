const vscode = require('vscode');
const https = require('https');

const API_URL = 'https://api.ollama.com/api/usage';

let statusBarItem = null;
let refreshTimer = null;

function activate(context) {
    // Create status bar item (right side, high priority)
    statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100
    );
    statusBarItem.command = 'ollamaProStatus.showDetails';
    statusBarItem.tooltip = 'Ollama Pro Usage - Click for details';
    context.subscriptions.push(statusBarItem);

    // Register commands
    context.subscriptions.push(
        vscode.commands.registerCommand('ollamaProStatus.showDetails', showDetails)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('ollamaProStatus.refresh', refreshUsage)
    );

    // Initial fetch
    refreshUsage();

    // Set up periodic refresh
    const config = vscode.workspace.getConfiguration('ollamaProStatus');
    const interval = config.get('refreshInterval', 60) * 1000;
    refreshTimer = setInterval(refreshUsage, interval);
    context.subscriptions.push({ dispose: () => clearInterval(refreshTimer) });

    // Listen for config changes
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('ollamaProStatus')) {
                clearInterval(refreshTimer);
                const newInterval = vscode.workspace.getConfiguration('ollamaProStatus').get('refreshInterval', 60) * 1000;
                refreshTimer = setInterval(refreshUsage, newInterval);
                refreshUsage();
            }
        })
    );
}

function getApiKey() {
    const config = vscode.workspace.getConfiguration('ollamaProStatus');
    let apiKey = config.get('apiKey', '');

    // Fallback: try to read from ~/.ollama/config.json
    if (!apiKey) {
        try {
            const fs = require('fs');
            const path = require('path');
            const homeDir = require('os').homedir();
            const configPath = path.join(homeDir, '.ollama', 'config.json');
            if (fs.existsSync(configPath)) {
                const ollamaConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
                apiKey = ollamaConfig.api_key || '';
            }
        } catch (e) {
            // ignore
        }
    }

    return apiKey;
}

function fetchUsage() {
    return new Promise((resolve, reject) => {
        const apiKey = getApiKey();
        if (!apiKey) {
            reject(new Error('No API key configured. Set ollamaProStatus.apiKey in settings.'));
            return;
        }

        const url = new URL(API_URL);
        const options = {
            hostname: url.hostname,
            path: url.pathname,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json'
            },
            timeout: 10000
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve(json);
                } catch (e) {
                    reject(new Error(`Failed to parse response: ${e.message}`));
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request timed out'));
        });

        req.end();
    });
}

async function refreshUsage() {
    try {
        const data = await fetchUsage();
        const sessionPct = ((data.limits?.session?.usage || 0) * 100).toFixed(1);
        const weeklyPct = ((data.limits?.weekly?.usage || 0) * 100).toFixed(1);
        const cost = data.activity?.cost || '0.00';

        statusBarItem.text = `$(flame) S:${sessionPct}% W:${weeklyPct}%`;
        statusBarItem.tooltip = `Ollama Pro Usage\nSession: ${sessionPct}%\nWeekly: ${weeklyPct}%\nCost (4w): $${cost}`;
        statusBarItem.backgroundColor = undefined;
        statusBarItem.show();
    } catch (error) {
        statusBarItem.text = `$(warning) Ollama Pro`;
        statusBarItem.tooltip = `Ollama Pro: ${error.message}`;
        statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.errorBackground');
        statusBarItem.show();
    }
}

async function showDetails() {
    try {
        const data = await fetchUsage();
        const sessionPct = ((data.limits?.session?.usage || 0) * 100).toFixed(1);
        const weeklyPct = ((data.limits?.weekly?.usage || 0) * 100).toFixed(1);
        const cost = data.activity?.cost || '0.00';

        const sessionModels = (data.limits?.session?.models || [])
            .map(m => `  • ${m.name}: ${m.request_count} requests`)
            .join('\n');
        const weeklyModels = (data.limits?.weekly?.models || [])
            .map(m => `  • ${m.name}: ${m.request_count} requests`)
            .join('\n');

        const message = [
            `💵 Cost (4 weeks): $${cost}`,
            '',
            `📊 Session usage: ${sessionPct}%`,
            sessionModels || '  No models used this session',
            '',
            `📊 Weekly usage: ${weeklyPct}%`,
            weeklyModels || '  No models used this week',
        ].join('\n');

        const action = await vscode.window.showInformationMessage(
            message,
            { modal: false },
            'Refresh',
            'Open Account'
        );

        if (action === 'Refresh') {
            refreshUsage();
        } else if (action === 'Open Account') {
            vscode.env.openExternal(vscode.Uri.parse('https://ollama.com/account'));
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Ollama Pro: ${error.message}`);
    }
}

function deactivate() {
    if (statusBarItem) {
        statusBarItem.dispose();
    }
    if (refreshTimer) {
        clearInterval(refreshTimer);
    }
}

module.exports = { activate, deactivate };