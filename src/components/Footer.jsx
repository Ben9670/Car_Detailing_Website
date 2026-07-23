import { forwardRef } from 'react'

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-gray-900 text-gray-300 text-center py-10 mt-20">
      <p>© 2026 ShineCar Detailing. All rights reserved.</p>
    </footer>
  )
})

export default Footer