import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Find from './components/find'


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Find />}/>
        </Routes>
    )
}