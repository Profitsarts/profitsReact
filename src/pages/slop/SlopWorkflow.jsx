import { workflowPhilosophy, workflowRules } from '../../data/slopaudio_catalog';

const SlopWorkflow = () => {
    const wp = workflowPhilosophy;

    return (
        <div>
            <div className="slop-surface slop-fade-in" style={{ position: 'relative', padding: '48px 40px', marginBottom: 32 }}>
                <div className="slop-index-tick" />
                <div className="slop-label" style={{ marginBottom: 12 }}>Workflow</div>
                <h1 className="slop-h1" style={{ margin: '0 0 16px 0' }}>
                    How the <span className="slop-accent-text">system</span> works
                </h1>
                <p className="slop-body" style={{ maxWidth: 650, margin: 0 }}>
                    The template repo is the source of truth. The AI reads it, digests it, and builds on it.
                    Designs are human — made by hand, refined in Figma, implemented by the AI.
                </p>
            </div>

            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{wp.sourceOfTruth.title}</h2>
                <p className="slop-body" style={{ margin: 0 }}>{wp.sourceOfTruth.description}</p>
            </div>

            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{wp.designProcess.title}</h2>
                <p className="slop-body" style={{ margin: 0 }}>{wp.designProcess.description}</p>
            </div>

            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{wp.figmaFlow.title}</h2>
                <p className="slop-body" style={{ margin: 0 }}>{wp.figmaFlow.description}</p>
            </div>

            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{wp.toolSeparation.title}</h2>
                <p className="slop-body" style={{ margin: 0 }}>{wp.toolSeparation.description}</p>
            </div>

            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>{wp.catalogReference.title}</h2>
                <p className="slop-body" style={{ margin: 0 }}>{wp.catalogReference.description}</p>
            </div>

            <div className="slop-surface" style={{ position: 'relative', padding: 32, marginBottom: 24 }}>
                <div className="slop-index-tick" />
                <h2 className="slop-h2" style={{ margin: '0 0 16px 0' }}>The 7 Rules</h2>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {workflowRules.map((rule, i) => (
                        <li key={i} className="slop-body" style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <span className="slop-accent-text slop-mono" style={{ background: 'none', padding: 0, minWidth: 24 }}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span>{rule}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default SlopWorkflow;
