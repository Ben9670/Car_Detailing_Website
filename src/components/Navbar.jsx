import { Link, useLocation } from 'react-router-dom'

function Navbar({ isNearFooter }) {
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 z-50 rounded-full px-10 py-4 flex gap-4 transition-all duration-700 ease-in-out backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 shadow-lg"
      style={{
        top: isNearFooter ? '24px' : 'calc(100vh - 110px)',
      }}
    >
      {links.map((link) => {
        const isActive = location.pathname === link.path
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`text-lg font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-white/40 dark:bg-white/25 text-gray-900 dark:text-white shadow-md scale-105'
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