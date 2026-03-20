import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Project01 from './pages/Project01';
import Project03 from './pages/Project03';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Portfolio />} />
                    <Route path="project/01" element={<Project01 />} />
                    <Route path="project/03" element={<Project03 />} />
                    <Route path="project/:id" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
