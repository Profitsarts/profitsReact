import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-neutral-400 transition-colors">
                        PROFITS<span className="text-neutral-500">ARTS</span>
                    </Link>

                    <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest">
                        <Link to="/" className="hover:text-neutral-400 transition-colors">WORKS</Link>
                        <a href="mailto:profitsarts@gmail.com" className="hover:text-neutral-400 transition-colors">CONTACT</a>
                    </nav>
                </div>
            </header>

            <main className="flex-grow pt-24 pb-12 px-6 container mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Profits Arts'n'Grafx. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
