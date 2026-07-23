import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  const footerRef = useRef(null)
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsNearFooter(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (footerRef.current) observer.observe(footerRef.current)

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current)
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Logo />
      <ThemeToggle />
      <Navbar isNearFooter={isNearFooter} />
      {children}
      <Footer ref={footerRef} />
    </div>
  )
}

export default Layout