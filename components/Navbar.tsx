'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Github, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md bg-slate-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-xl sm:text-2xl font-bold text-white">
              Nezium
            </a>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="mailto:tamktos635@gmail.com"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-slate-700/30"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                className="text-blue-300 hover:text-white block px-3 py-3 text-base font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex justify-center space-x-6 pt-4 border-t border-slate-700/30">
              <motion.a 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="mailto:tamktos635@gmail.com" 
                className="text-blue-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
