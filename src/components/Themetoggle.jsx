import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 w-16 h-9 flex items-center rounded-full px-1 bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      style={{
        boxShadow: `
          6px 6px 12px rgba(0, 0, 0, 0.15),
          -6px -6px 12px rgba(255, 255, 255, 0.7),
          inset 2px 2px 4px rgba(255, 255, 255, 0.3),
          inset -2px -2px 4px rgba(0, 0, 0, 0.1)
        `,
      }}
    >
      <div
        className={`w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-600 transform transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
        style={{
          boxShadow: `
            3px 3px 6px rgba(0, 0, 0, 0.2),
            -2px -2px 6px rgba(255, 255, 255, 0.6),
            inset 1px 1px 2px rgba(255, 255, 255, 0.5),
            inset -1px -1px 2px rgba(0, 0, 0, 0.1)
          `,
        }}
      />
    </button>
  )
}

export default ThemeToggle