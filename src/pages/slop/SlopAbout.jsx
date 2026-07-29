import {
    designTokens,
    catalogPhilosophy,
    infrastructure,
    workflowRules,
    architecture,
} from '../../data/slopaudio_catalog';

const SlopAbout = () => {
    const p = designTokens.palette;

    return (
        <div>
            {/* Hero */}
            <div className="slop-surface slop-fade-in" style={{ position: 'relative', padding: '48px 40px', marginBottom: 32 }}>
                <div className="slop-index-tick" />
                <div className="slop-label" style={{ marginBottom: 12 }}>About</div>
                <h1 className="slop-h1" style={{ margin: '0 0 16px 0' }}>
                    The <span className="slop-accent-text">system</span> behind the sound
                </h1>
                <p className="slop-body" style={{ maxWidth: 650, margin: 0 }}>
                    SlopAudio is a plugin suite built on a shared JUCE template. The design language is
                    editorial minimalism: flat surfaces, one accent, vertical bar encoders, and a single
                    repeating signature detail — the index tick.
                </p>
            </div>

            {/* Design Philosophy */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 8px 0' }}>{catalogPhilosophy.title}</h2>
                <span className="slop-label" style={{ color: 'var(--slop-accent)', marginBottom: 16, display: 'block' }}>
                    {catalogPhilosophy.scope}
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
                    {catalogPhilosophy.principles.map((principle, i) => (
                        <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <span className="slop-accent-text" style={{ marginTop: 2, fontSize: '0.7rem' }}>▸</span>
                            <span>{principle}</span>
                        </li>
                    ))}
                </ul>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Stance</span>
                    <p className="slop-body" style={{ margin: '4px 0 12px 0' }}>{catalogPhilosophy.stance}</p>
                    <span className="slop-label">Parity counterargument</span>
                    <p className="slop-body" style={{ margin: '4px 0 12px 0' }}>{catalogPhilosophy.parityCounterargument}</p>
                    <span className="slop-label">Neuromarketing</span>
                    <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{catalogPhilosophy.neuromarketing}</p>
                </div>
            </div>

            {/* Control Morphology */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{designTokens.controlMorphology.title}</h2>
                <p className="slop-body" style={{ marginBottom: 20 }}>
                    {designTokens.controlMorphology.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                        <span className="slop-label">Macro controls</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.controlMorphology.macroControls}</p>
                    </div>
                    <div>
                        <span className="slop-label">Module controls</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.controlMorphology.moduleControls}</p>
                    </div>
                    <div>
                        <span className="slop-label">Linear sliders</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.controlMorphology.linearSliders}</p>
                    </div>
                    <div>
                        <span className="slop-label">Toggles</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.controlMorphology.toggles}</p>
                    </div>
                </div>
                <p className="slop-body-muted" style={{ fontSize: '0.8rem', marginTop: 16 }}>
                    {designTokens.controlMorphology.deleted}
                </p>
            </div>

            {/* Surface Philosophy */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{designTokens.surfacePhilosophy.title}</h2>
                <p className="slop-body" style={{ marginBottom: 12 }}>
                    {designTokens.surfacePhilosophy.description}
                </p>
                <p className="slop-body">
                    {designTokens.surfacePhilosophy.monochrome}
                </p>
            </div>

            {/* Temperature & Accent */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>Temperature & Accent</h2>
                <div style={{ marginBottom: 16 }}>
                    <span className="slop-label">Cool bias</span>
                    <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.temperatureBias}</p>
                </div>
                <div style={{ marginBottom: 16, paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Accent rationale</span>
                    <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.accentRationale}</p>
                </div>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Radii</span>
                    <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.radiiNote}</p>
                </div>
            </div>

            {/* Design Tokens — Palette */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>Palette — Cool-Graphite + Amber</h2>
                <p className="slop-body" style={{ marginBottom: 20 }}>
                    Deliberately biased <span className="slop-accent-text">cool</span> (blue-green), not a neutral grey ramp.
                    The temperature bias is the stated differentiator. One accent only — amber-gold, chosen
                    to be distinct from Slate & Ash's coral.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
                    {[
                        ['base950', p.base950, 'Chassis'],
                        ['base900', p.base900, 'Display'],
                        ['base800', p.base800, 'Raised'],
                        ['base700', p.base700, 'Hairline'],
                        ['base600', p.base600, ''],
                        ['base400', p.base400, ''],
                        ['base200', p.base200, ''],
                        ['base050', p.base050, 'Text'],
                        ['accentGold', p.accentGold, 'Accent'],
                    ].map(([name, hex, role]) => (
                        <div key={name} style={{ background: 'var(--slop-base950)', borderRadius: 'var(--slop-radius)', overflow: 'hidden' }}>
                            <div style={{ height: 48, backgroundColor: hex }} />
                            <div style={{ padding: '6px 8px' }}>
                                <div className="slop-mono" style={{ background: 'none', padding: 0, fontSize: '0.75rem' }}>{name}</div>
                                <div className="slop-body-muted" style={{ fontSize: '0.7rem' }}>{hex}</div>
                                {role && <div className="slop-label" style={{ fontSize: '0.6rem', marginTop: 2 }}>{role}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Design Tokens — Metrics */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>Metrics & Signature</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                        <span className="slop-label">Grid</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.metrics.grid}</p>
                    </div>
                    <div>
                        <span className="slop-label">Canvas</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.metrics.canvasW}×{designTokens.metrics.canvasH}px</p>
                    </div>
                    <div>
                        <span className="slop-label">Radii</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.metrics.radiusPanel} (panel/card/ctrl)</p>
                    </div>
                    <div>
                        <span className="slop-label">Index tick</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.metrics.indexTick}</p>
                    </div>
                    <div>
                        <span className="slop-label">Font</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.fonts.primary}</p>
                    </div>
                    <div>
                        <span className="slop-label">Value hero</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.fonts.valueHero}</p>
                    </div>
                </div>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Signature</span>
                    <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{designTokens.signature}</p>
                    <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: '4px 0 0 0' }}>{designTokens.signatureDetail}</p>
                </div>
            </div>

            {/* Architecture */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{architecture.title}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                    {architecture.layers.map((layer, i) => (
                        <div key={i} style={{ padding: 16, background: 'var(--slop-base950)', borderRadius: 'var(--slop-radius)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                                <span className="slop-accent-text slop-mono" style={{ background: 'none', padding: 0, minWidth: 24 }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="slop-mono" style={{ background: 'none', padding: 0, color: 'var(--slop-base050)', fontWeight: 600 }}>
                                    {layer.name}
                                </span>
                            </div>
                            <p className="slop-body" style={{ margin: '4px 0 0 36px', fontSize: '0.88rem' }}>
                                {layer.role}
                            </p>
                        </div>
                    ))}
                </div>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Layout rules</span>
                    <p className="slop-body" style={{ margin: '4px 0' }}>{architecture.layoutRules.approach}</p>
                    <p className="slop-body" style={{ margin: '4px 0' }}>
                        <span className="slop-accent-text">Positive rule:</span> {architecture.layoutRules.positiveRule}
                    </p>
                    <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: '4px 0 0 0' }}>
                        {architecture.layoutRules.scope}
                    </p>
                </div>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">{architecture.uiFeed.name}</span>
                    <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{architecture.uiFeed.description}</p>
                </div>
            </div>

            {/* Verification */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>Verification — All Green</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                        <span className="slop-label">Engine tests</span>
                        <p className="slop-body slop-accent-text" style={{ margin: '4px 0 0 0' }}>{designTokens.verification.engineTests}</p>
                    </div>
                    <div>
                        <span className="slop-label">Build</span>
                        <p className="slop-body slop-accent-text" style={{ margin: '4px 0 0 0' }}>Clean ✓</p>
                        <p className="slop-body-muted" style={{ fontSize: '0.8rem', margin: '2px 0 0 0' }}>{designTokens.verification.build}</p>
                    </div>
                    <div>
                        <span className="slop-label">pluginval</span>
                        <p className="slop-body slop-accent-text" style={{ margin: '4px 0 0 0' }}>{designTokens.verification.pluginval}</p>
                    </div>
                </div>
            </div>

            {/* Pending Issues */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 8px 0' }}>Honestly Pending</h2>
                <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: '0 0 16px 0' }}>
                    What is not yet done — documented honestly.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {designTokens.pendingIssues.map((issue, i) => (
                        <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <span style={{ color: '#c66', marginTop: 2, fontSize: '0.7rem' }}>⚠</span>
                            <span>{issue}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Repo State */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>Repo State — Now</h2>
                <div style={{ marginBottom: 12 }}>
                    <span className="slop-label">Repo</span>
                    <p className="slop-mono" style={{ margin: '4px 0 0 0' }}>{designTokens.repoState.repo}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
                    {designTokens.repoState.commits.map((commit, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'var(--slop-base950)', borderRadius: 'var(--slop-radius)' }}>
                            <span className="slop-mono" style={{ background: 'none', padding: 0, color: 'var(--slop-accent)' }}>{commit.hash}</span>
                            <span className="slop-body-muted" style={{ fontSize: '0.8rem' }}>{commit.date}</span>
                            <span className="slop-body" style={{ fontSize: '0.85rem' }}>{commit.message}</span>
                        </div>
                    ))}
                </div>
                <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: 0 }}>{designTokens.repoState.note}</p>
            </div>

            {/* Prohibitions */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 8px 0' }}>Prohibitions — Never Copy</h2>
                <p className="slop-body" style={{ marginBottom: 16 }}>
                    Reference signatures of other brands, recorded so the SlopAudio identity stays distinct.
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                    {designTokens.prohibitions.map((item, i) => (
                        <span key={i} className="slop-tag" style={{ cursor: 'default', color: '#c66', borderColor: '#c6644' }}>
                            ✕ {item}
                        </span>
                    ))}
                </div>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Reusable principles (the grammar that stays)</span>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                        {designTokens.reusablePrinciples.map((item, i) => (
                            <span key={i} className="slop-tag" style={{ cursor: 'default', color: 'var(--slop-accent)', borderColor: 'var(--slop-accent)' }}>
                                ✓ {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Workflow Rules */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>Workflow — 7 Rules</h2>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'rule' }}>
                    {workflowRules.map((rule, i) => (
                        <li key={i} className="slop-body" style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 12, counterIncrement: 'rule' }}>
                            <span className="slop-accent-text slop-mono" style={{ background: 'none', padding: 0, minWidth: 24 }}>{String(i + 1).padStart(2, '0')}</span>
                            <span>{rule}</span>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Infrastructure */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>Infrastructure</h2>

                <div style={{ marginBottom: 20 }}>
                    <span className="slop-label">Licensing</span>
                    <p className="slop-body" style={{ margin: '4px 0' }}>{infrastructure.licensing.provider}</p>
                    <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: '0 0 4px 0' }}>{infrastructure.licensing.status}</p>
                    <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: 0 }}>{infrastructure.licensing.eula}</p>
                </div>

                <div style={{ marginBottom: 20, paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Hosting — Current</span>
                    <p className="slop-body" style={{ margin: '4px 0' }}>{infrastructure.hosting.current}</p>
                    <span className="slop-label" style={{ marginTop: 12, display: 'block' }}>Hosting — Planned</span>
                    <p className="slop-body" style={{ margin: '4px 0' }}>{infrastructure.hosting.planned}</p>
                    <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: '4px 0 0 0' }}>{infrastructure.hosting.status}</p>
                </div>

                <div style={{ paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Open Questions</span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0 0' }}>
                        {infrastructure.openQuestions.map((q, i) => (
                            <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <span className="slop-accent-text" style={{ marginTop: 2, fontSize: '0.7rem' }}>?</span>
                                <span>{q}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SlopAbout;