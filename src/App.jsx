import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Portfolio />} />
                    <Route path="project/:id" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
