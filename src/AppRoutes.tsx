import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Root, { NotFound, ErrorBoundary } from './routes/__root'
import Home from './routes/index'
import About from './routes/about'
import Contact from './routes/contact'
import Demo from './routes/demo'
import Projects from './routes/projects'
import Solutions from './routes/solutions'
import SolutionsIndex from './routes/solutions/index'
import Engineering from './routes/solutions/engineering'
import Medical from './routes/solutions/medical'
import Veterinary from './routes/solutions/veterinary'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="demo" element={<Demo />} />
        <Route path="projects" element={<Projects />} />
        <Route path="solutions" element={<Solutions />}>
          <Route index element={<SolutionsIndex />} />
          <Route path="engineering" element={<Engineering />} />
          <Route path="medical" element={<Medical />} />
          <Route path="veterinary" element={<Veterinary />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
