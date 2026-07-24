import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="relative overflow-hidden mt-20 bg-gray-900">
      {/* Background logo - large, faded, sits behind the glass */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-30"
        style={{
          backgroundImage: `url(${logoImg})`,
          backgroundSize: '400px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Glass panel sitting on top - blurs the logo behind it */}
      <div className="relative backdrop-blur-md bg-white/10 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-200">

          {/* Business info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">ShineCar Detailing</h3>
            <p className="text-sm text-gray-300">
              Restoring shine, protecting value — premium car care you can trust.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-300 transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 123 Main Street, Bengaluru</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@shinecar.com</li>
              <li>🕒 Mon–Sat: 9am – 7pm</li>
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                🐦
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
          © 2026 ShineCar Detailing. All rights reserved.
        </div>
      </div>
    </footer>
  )
})

export default Footer