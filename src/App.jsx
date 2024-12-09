import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ExperienceDetail from './components/ExperienceDetails/ExperienceDetail';
import { PaginationProvider } from './context/PaginationContext'; // Fixed import

export default function App() {
    return (
        <PaginationProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience/:id" element={<ExperienceDetail />} />
                </Routes>
            </BrowserRouter>
        </PaginationProvider>
    );
}
