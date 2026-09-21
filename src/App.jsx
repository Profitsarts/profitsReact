import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Portfolio />} />
                    <Route path="project/:id" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
