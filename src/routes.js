import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Find from './components/Find'


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Find />} />
        </Routes>
    )
}
