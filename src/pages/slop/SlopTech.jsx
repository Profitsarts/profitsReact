import { technicalDecisions, lfoDebate } from '../../data/slopaudio_catalog';

const SlopTech = () => {
    return (
        <div>
            <div className="slop-surface slop-fade-in" style={{ position: 'relative', padding: '48px 40px', marginBottom: 32 }}>
                <div className="slop-index-tick" />
                <div className="slop-label" style={{ marginBottom: 12 }}>Technical Decisions</div>
                <h1 className="slop-h1" style={{ margin: '0 0 16px 0' }}>
                    Open <span className="slop-accent-text">questions</span> & tradeoffs
                </h1>
                <p className="slop-body" style={{ maxWidth: 650, margin: 0 }}>
                    Technical decisions that are not yet resolved. Documented so they don't get lost.
                </p>
            </div>

            {technicalDecisions.map((td) => (
                <div key={td.id} className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                    <div className="slop-index-tick" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <h2 className="slop-h2" style={{ margin: 0, fontSize: '1.3rem' }}>{td.title}</h2>
                        <span className="slop-tag" style={{ cursor: 'default', color: '#c66', borderColor: '#c6644' }}>
                            {td.status}
                        </span>
                    </div>
                    <p className="slop-body" style={{ margin: '0 0 16px 0' }}>{td.summary}</p>

                    <div style={{ marginBottom: 16 }}>
                        <span className="slop-label" style={{ marginBottom: 8, display: 'block' }}>Options</span>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {td.options.map((opt, i) => (
                                <li key={i} className="slop-body" style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                    <span className="slop-accent-text" style={{ marginTop: 2, fontSize: '0.7rem' }}>▸</span>
                                    <span>{opt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: 16, paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                        <span className="slop-label">Connection</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{td.connection}</p>
                    </div>

                    <div style={{ paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                        <span className="slop-label">Related risk</span>
                        <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{td.relatedRisk}</p>
                    </div>
                </div>
            ))}

            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <h2 className="slop-h2" style={{ margin: 0, fontSize: '1.3rem' }}>{lfoDebate.title}</h2>
                    <span className="slop-tag" style={{ cursor: 'default', color: '#c66', borderColor: '#c6644' }}>
                        {lfoDebate.status}
                    </span>
                </div>
                <p className="slop-body" style={{ margin: '0 0 16px 0' }}>{lfoDebate.summary}</p>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--slop-base700)' }}>
                    <span className="slop-label">Practical problem</span>
                    <p className="slop-body" style={{ margin: '4px 0 0 0' }}>{lfoDebate.practicalProblem}</p>
                </div>
            </div>
        </div>
    );
};

export default SlopTech;
