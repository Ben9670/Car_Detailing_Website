import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import Layout from './components/Layout'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

const pageOrder = ['/', '/services', '/gallery', '/about', '/contact']

function App() {
  const location = useLocation()
  const prevIndexRef = useRef(pageOrder.indexOf(location.pathname))

  const currentIndex = pageOrder.indexOf(location.pathname)
  const direction = currentIndex > prevIndexRef.current ? 1 : -1
  prevIndexRef.current = currentIndex

  return (
    <Layout>
      <div className="overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition direction={direction}><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition direction={direction}><Services /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition direction={direction}><Gallery /></PageTransition>} />
            <Route path="/about" element={<PageTransition direction={direction}><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition direction={direction}><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Layout>
  )
}

export default App