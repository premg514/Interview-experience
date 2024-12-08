import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ExperienceDetail from './components/ExperienceDetails/ExperienceDetail'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path="/experience/:id" element={<ExperienceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
