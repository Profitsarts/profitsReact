import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SlopLayout from './components/slop/SlopLayout';

// Code-split the route pages so the initial bundle only carries the shell.
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Project01 = lazy(() => import('./pages/Project01'));
const Project03 = lazy(() => import('./pages/Project03'));

// SlopAudio pages
const SlopCatalog = lazy(() => import('./pages/slop/SlopCatalog'));
const SlopPluginDetail = lazy(() => import('./pages/slop/SlopPluginDetail'));
const SlopAbout = lazy(() => import('./pages/slop/SlopAbout'));
const SlopWorkflow = lazy(() => import('./pages/slop/SlopWorkflow'));
const SlopTech = lazy(() => import('./pages/slop/SlopTech'));
const SlopJournal = lazy(() => import('./pages/slop/SlopJournal'));

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

                    {/* SlopAudio plugin suite */}
                    <Route path="/slop" element={<SlopLayout />}>
                        <Route index element={<SlopCatalog />} />
                        <Route path="plugin/:id" element={<SlopPluginDetail />} />
                        <Route path="about" element={<SlopAbout />} />
                        <Route path="workflow" element={<SlopWorkflow />} />
                        <Route path="tech" element={<SlopTech />} />
                        <Route path="journal" element={<SlopJournal />} />
                    </Route>
                </Routes>
            </Suspense>
        </HashRouter>
    );
}

export default App;
