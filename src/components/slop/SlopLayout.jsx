import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SlopLayout = () => {
    const location = useLocation();

    const navItems = [
        { to: '/slop', label: 'Catalog' },
        { to: '/slop/about', label: 'About' },
        { to: '/slop/workflow', label: 'Workflow' },
        { to: '/slop/tech', label: 'Tech' },
        { to: '/slop/journal', label: 'Journal' },
    ];

    const isActive = (to) => {
        if (to === '/slop') return location.pathname === '/slop';
        return location.pathname.startsWith(to);
    };

    return (
        <div className="slop-app">
            {/* Header */}
            <header className="slop-surface" style={{ borderRadius: 0, padding: 0 }}>
                <div className="slop-index-tick" />
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <Link to="/slop" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                            <span className="slop-h2" style={{ fontSize: '1.5rem', margin: 0 }}>Slop</span>
                            <span className="slop-accent-text" style={{ fontWeight: 700, fontSize: '1.5rem' }}>Audio</span>
                        </div>
                    </Link>
                    <nav style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="slop-label"
                                style={{ textDecoration: 'none', color: isActive(item.to) ? 'var(--slop-accent)' : 'var(--slop-base400)' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="https://moonbase.sh/docs/licensing/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="slop-label"
                            style={{ textDecoration: 'none', color: 'var(--slop-base400)' }}
                        >
                            Licensing ↗
                        </a>
                    </nav>
                </div>
            </header>

            <hr className="slop-divider" />

            {/* Main */}
            <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px', minHeight: 'calc(100vh - 200px)' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="slop-surface" style={{ borderRadius: 0, padding: 0 }}>
                <hr className="slop-divider" />
                <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <div className="slop-index-tick" />
                    <div>
                        <span className="slop-label">SlopAudio</span>
                        <span className="slop-body-muted" style={{ marginLeft: 12, fontSize: '0.8rem' }}>
                            Plugin suite — VST3 / Standalone
                        </span>
                    </div>
                    <div className="slop-body-muted" style={{ fontSize: '0.8rem' }}>
                        Editorial minimalism · Cool-graphite + amber
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SlopLayout;
