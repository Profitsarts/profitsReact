import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { plugins, categories, allTags } from '../../data/slopaudio_catalog';

const statusLabel = {
    'released': 'Released',
    'work-in-progress': 'WIP',
    'needs-review': 'Needs Review',
};

const statusClass = {
    'released': 'slop-status-released',
    'work-in-progress': 'slop-status-wip',
    'needs-review': 'slop-status-needs-review',
};

const SlopCatalog = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeTags, setActiveTags] = useState(new Set());

    const toggleTag = (tag) => {
        setActiveTags(prev => {
            const next = new Set(prev);
            if (next.has(tag)) next.delete(tag);
            else next.add(tag);
            return next;
        });
    };

    const filtered = useMemo(() => {
        return plugins.filter(p => {
            if (activeCategory !== 'all' && p.category !== activeCategory) return false;
            if (activeTags.size > 0) {
                for (const t of activeTags) {
                    if (!p.tags.includes(t)) return false;
                }
            }
            return true;
        });
    }, [activeCategory, activeTags]);

    const catLabel = (id) => {
        if (id === 'all') return 'All';
        return categories.find(c => c.id === id)?.label || id;
    };

    return (
        <div>
            {/* Hero */}
            <div className="slop-surface slop-fade-in" style={{ position: 'relative', padding: '48px 40px', marginBottom: 32 }}>
                <div className="slop-index-tick" />
                <div className="slop-label" style={{ marginBottom: 12 }}>SlopAudio Plugin Suite</div>
                <h1 className="slop-h1" style={{ margin: '0 0 16px 0' }}>
                    Audio plugins with <span className="slop-accent-text">editorial</span> restraint
                </h1>
                <p className="slop-body" style={{ maxWidth: 600, margin: 0 }}>
                    A suite of VST3 / Standalone audio plugins built on a shared JUCE template.
                    Cool-graphite monochrome, one amber accent, vertical bar encoders — no dials, no rings.
                    Inspired, never copied.
                </p>
            </div>

            {/* Category filters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                <span className="slop-label" style={{ marginRight: 8 }}>Category</span>
                <button
                    className={`slop-cat-btn ${activeCategory === 'all' ? 'slop-cat-btn-active' : ''}`}
                    onClick={() => setActiveCategory('all')}
                >
                    All
                </button>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`slop-cat-btn ${activeCategory === cat.id ? 'slop-cat-btn-active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                        title={cat.description}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Tag filters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 32, flexWrap: 'wrap' }}>
                <span className="slop-label" style={{ marginRight: 8 }}>Tags</span>
                {allTags.map(tag => (
                    <span
                        key={tag}
                        className={`slop-tag ${activeTags.has(tag) ? 'slop-tag-active' : ''}`}
                        onClick={() => toggleTag(tag)}
                    >
                        {tag}
                    </span>
                ))}
                {activeTags.size > 0 && (
                    <button
                        onClick={() => setActiveTags(new Set())}
                        className="slop-label slop-link"
                        style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Clear ({activeTags.size})
                    </button>
                )}
            </div>

            {/* Results count */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span className="slop-body-muted" style={{ fontSize: '0.85rem' }}>
                    {filtered.length} {filtered.length === 1 ? 'plugin' : 'plugins'}
                    {activeCategory !== 'all' && ` in ${catLabel(activeCategory)}`}
                    {activeTags.size > 0 && ` matching ${activeTags.size} tag${activeTags.size > 1 ? 's' : ''}`}
                </span>
            </div>

            {/* Plugin grid */}
            {filtered.length === 0 ? (
                <div className="slop-surface" style={{ padding: 48, textAlign: 'center' }}>
                    <p className="slop-body-muted">No plugins match these filters.</p>
                </div>
            ) : (
                <div className="slop-grid-catalog">
                    {filtered.map((plugin, i) => (
                        <Link
                            key={plugin.id}
                            to={`/slop/plugin/${plugin.id}`}
                            className="slop-plugin-card slop-fade-in"
                            style={{ animationDelay: `${i * 0.04}s` }}
                        >
                            <div className="slop-index-tick" />

                            {/* Top row: status + version */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={`slop-status-dot ${statusClass[plugin.status]}`} />
                                    <span className="slop-label">{statusLabel[plugin.status]}</span>
                                </span>
                                <span className="slop-mono">{plugin.version}</span>
                            </div>

                            {/* Name + category */}
                            <h3 className="slop-h2" style={{ fontSize: '1.35rem', margin: '0 0 4px 0' }}>
                                {plugin.name}
                            </h3>
                            <span className="slop-label" style={{ color: 'var(--slop-accent)', marginBottom: 12, display: 'block' }}>
                                {catLabel(plugin.category)}
                            </span>

                            {/* Description */}
                            <p className="slop-body" style={{ fontSize: '0.88rem', marginBottom: 16 }}>
                                {plugin.description}
                            </p>

                            {/* Tags */}
                            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                                {plugin.tags.slice(0, 5).map(tag => (
                                    <span key={tag} className="slop-tag" style={{ cursor: 'default' }}>
                                        {tag}
                                    </span>
                                ))}
                                {plugin.tags.length > 5 && (
                                    <span className="slop-body-muted" style={{ fontSize: '0.7rem', alignSelf: 'center' }}>
                                        +{plugin.tags.length - 5}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SlopCatalog;
