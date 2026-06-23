import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Code-split the route pages so the initial bundle only carries the shell.
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Project01 = lazy(() => import('./pages/Project01'));
const Project03 = lazy(() => import('./pages/Project03'));

function App() {
    return (
        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Portfolio />} />
                        <Route path="project/01" element={<Project01 />} />
                        <Route path="project/03" element={<Project03 />} />
                        <Route path="project/:id" element={<ProjectDetail />} />
                    </Route>
                </Routes>
            </Suspense>
        </HashRouter>
    );
}

export default App;
