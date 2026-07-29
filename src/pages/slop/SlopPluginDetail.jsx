import { useParams, Link } from 'react-router-dom';
import { plugins, categories } from '../../data/slopaudio_catalog';

const statusLabel = {
    'released': 'Released',
    'work-in-progress': 'Work in Progress',
    'needs-review': 'Needs Review',
};

const statusClass = {
    'released': 'slop-status-released',
    'work-in-progress': 'slop-status-wip',
    'needs-review': 'slop-status-needs-review',
};

const severityClass = {
    'high': 'slop-severity-high',
    'medium': 'slop-severity-medium',
    'low': 'slop-severity-low',
};

const SlopPluginDetail = () => {
    const { id } = useParams();
    const plugin = plugins.find(p => p.id === id);

    if (!plugin) {
        return (
            <div className="slop-surface" style={{ padding: 48, textAlign: 'center' }}>
                <p className="slop-body-muted">Plugin not found.</p>
                <Link to="/slop" className="slop-link" style={{ display: 'inline-block', marginTop: 16 }}>
                    ← Back to catalog
                </Link>
            </div>
        );
    }

    const cat = categories.find(c => c.id === plugin.category);

    return (
        <div>
            {/* Back link */}
            <Link to="/slop" className="slop-label slop-link" style={{ display: 'inline-block', marginBottom: 24, textDecoration: 'none' }}>
                ← Catalog
            </Link>

            {/* Header card */}
            <div className="slop-surface slop-fade-in" style={{ position: 'relative', padding: '40px 40px', marginBottom: 32 }}>
                <div className="slop-index-tick" />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                            <span className={`slop-status-dot ${statusClass[plugin.status]}`} />
                            <span className="slop-label">{statusLabel[plugin.status]}</span>
                            <span className="slop-mono">{plugin.version}</span>
                        </div>
                        <h1 className="slop-h1" style={{ margin: 0 }}>{plugin.name}</h1>
                        <span className="slop-label" style={{ color: 'var(--slop-accent)', marginTop: 8, display: 'block' }}>
                            {cat?.label} — {cat?.description}
                        </span>
                    </div>

                    {/* Decorative encoder bars */}
                    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', padding: 16 }}>
                        {[0.3, 0.6, 0.85, 0.45].map((fill, i) => (
                            <div key={i} className="slop-encoder">
                                <div className="slop-encoder-cap" />
                                <div className="slop-encoder-fill" style={{ height: `${fill * 100}%` }} />
                            </div>
                        ))}
                    </div>
                </div>

                <p className="slop-body" style={{ fontSize: '1.05rem', maxWidth: 700 }}>
                    {plugin.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 20 }}>
                    {plugin.tags.map(tag => (
                        <span key={tag} className="slop-tag" style={{ cursor: 'default' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Long description */}
            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ fontSize: '1.3rem', margin: '0 0 16px 0' }}>Overview</h2>
                <p className="slop-body" style={{ margin: 0 }}>
                    {plugin.longDescription}
                </p>
            </div>

            {/* Key features */}
            {plugin.keyFeatures && plugin.keyFeatures.length > 0 && (
                <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <h2 className="slop-h2" style={{ fontSize: '1.3rem', margin: '0 0 16px 0' }}>Key Features</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {plugin.keyFeatures.map((feat, i) => (
                            <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <span className="slop-accent-text" style={{ marginTop: 2, fontSize: '0.7rem' }}>▸</span>
                                <span>{feat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Bugs */}
            {plugin.bugs && plugin.bugs.length > 0 && (
                <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <h2 className="slop-h2" style={{ fontSize: '1.3rem', margin: '0 0 8px 0' }}>Known Bugs</h2>
                    <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: '0 0 16px 0' }}>
                        From direct UI review — not auto-generated.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {plugin.bugs.map((bug, i) => (
                            <div key={i} style={{ padding: 16, background: 'var(--slop-base950)', borderRadius: 'var(--slop-radius)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <span className={`slop-severity-dot ${severityClass[bug.severity]}`} />
                                    <span className="slop-label" style={{ color: 'var(--slop-base050)' }}>{bug.title}</span>
                                    <span className="slop-label" style={{ marginLeft: 'auto', textTransform: 'none', letterSpacing: 0 }}>
                                        {bug.severity}
                                    </span>
                                </div>
                                <p className="slop-body" style={{ margin: 0, fontSize: '0.88rem' }}>
                                    {bug.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Merge blockers */}
            {plugin.mergeBlockers && plugin.mergeBlockers.length > 0 && (
                <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <h2 className="slop-h2" style={{ fontSize: '1.3rem', margin: '0 0 16px 0' }}>Merge Blockers</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {plugin.mergeBlockers.map((blocker, i) => (
                            <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <span style={{ color: '#c66', marginTop: 2, fontSize: '0.7rem' }}>⏸</span>
                                <span>{blocker}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Roadmap */}
            {plugin.roadmap && plugin.roadmap.length > 0 && (
                <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <h2 className="slop-h2" style={{ fontSize: '1.3rem', margin: '0 0 8px 0' }}>Roadmap Ideas</h2>
                    <p className="slop-body-muted" style={{ fontSize: '0.85rem', margin: '0 0 16px 0' }}>
                        Marked "para revisar" — not yet built.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {plugin.roadmap.map((item, i) => (
                            <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <span className="slop-accent-text" style={{ marginTop: 2, fontSize: '0.7rem' }}>→</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Design notes */}
            {plugin.designNotes && (
                <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <h2 className="slop-h2" style={{ fontSize: '1.3rem', margin: '0 0 16px 0' }}>Design Notes</h2>
                    <p className="slop-body" style={{ margin: 0 }}>
                        {plugin.designNotes}
                    </p>
                </div>
            )}

            {/* References */}
            {plugin.references && plugin.references.length > 0 && (
                <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <h2 className="slop-h2" style={{ fontSize: '1.3rem', margin: '0 0 16px 0' }}>References</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {plugin.references.map((ref, i) => (
                            <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <span className="slop-accent-text" style={{ marginTop: 2, fontSize: '0.7rem' }}>▸</span>
                                <span>{ref}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Repo */}
            {plugin.repoUrl && (
                <div className="slop-surface" style={{ position: 'relative', padding: 24, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <span className="slop-label" style={{ marginRight: 12 }}>Repository</span>
                    <span className="slop-mono">{plugin.repoUrl}</span>
                </div>
            )}
        </div>
    );
};

export default SlopPluginDetail;