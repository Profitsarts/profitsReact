import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Layout = () => {
    const location = useLocation();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Handle scrolling to hash sections (SEE, TOUCH, HEAR)
        const targetId = location.state?.scrollTo;

        if (targetId) {
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else if (location.pathname === '/' && !location.state) {
            // Scroll to top when navigating to home without specific scroll state
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [location.pathname, location.state]);

    const handleAnchorClick = (e, id) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
            {/* Header */}
            <header className="bg-[#f8f8f8]">
                <div className="container mx-auto px-6 py-4 flex flex-col items-center">
                    {/* P Logo */}
                    <Link
                        to="/"
                        state={null}
                        className="mb-2 hover:opacity-80 transition-opacity"
                    >
                        <img
                            src="/assets/img/logos/profits_logo.svg"
                            alt="Profits Arts"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Navigation: SEE | TOUCH | HEAR */}
                    <nav className="mt-4 flex items-center justify-center space-x-12 font-['Museo_Slab'] text-[1.4rem] tracking-[-0.2px] uppercase">
                        <Link
                            to="/"
                            state={{ scrollTo: 'see' }}
                            onClick={(e) => handleAnchorClick(e, 'see')}
                            className="hover:text-[#f61067] transition-colors"
                        >
                            SEE
                        </Link>
                        <Link
                            to="/"
                            state={{ scrollTo: 'touch' }}
                            onClick={(e) => handleAnchorClick(e, 'touch')}
                            className="hover:text-[#f61067] transition-colors"
                        >
                            TOUCH
                        </Link>
                        <a
                            href="https://soundcloud.com/condres"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#f61067] transition-colors"
                        >
                            HEAR
                        </a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>


            {/* Footer - Dark theme */}
            <footer className="bg-neutral-950 border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Profits Arts'n'Grafx. All rights reserved.</p>
            </footer>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-12 h-12 bg-neutral-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-700 transition-colors z-50"
                        title="Back to top"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Layout;
