import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

function Navbar({ isNearFooter }) {
  const location = useLocation()
  const containerRef = useRef(null)
  const linkRefs = useRef({})
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })

  const measurePill = () => {
    const activeLink = linkRefs.current[location.pathname]
    const container = containerRef.current
    if (activeLink && container) {
      const linkRect = activeLink.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setPillStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      })
    }
  }

  useEffect(() => {
    measurePill()
    window.addEventListener('resize', measurePill)
    return () => window.removeEventListener('resize', measurePill)
  }, [location.pathname])

  return (
    <nav
      ref={containerRef}
      className="fixed left-1/2 -translate-x-1/2 z-50 rounded-full px-10 py-4 flex gap-4 transition-all duration-700 ease-in-out backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 shadow-lg"
      style={{
        top: isNearFooter ? '24px' : 'calc(100vh - 110px)',
      }}
    >
      <div
        className="absolute top-2 bottom-2 rounded-full bg-white/40 dark:bg-white/25 shadow-md transition-all duration-500 ease-in-out"
        style={{ left: pillStyle.left, width: pillStyle.width }}
      ></div>

      {links.map((link) => {
        const isActive = location.pathname === link.path
        return (
          <Link
            key={link.path}
            to={link.path}
            ref={(el) => (linkRefs.current[link.path] = el)}
            className={`relative z-10 text-lg font-semibold px-5 py-2 rounded-full transition-colors duration-300 ${
              isActive
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300'
            }`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar