import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PortfolioLayout from './components/PortfolioLayout'
import ProjectDetail from './components/ProjectDetail'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
