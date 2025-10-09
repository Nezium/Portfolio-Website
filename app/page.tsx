'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {

  return (
    <main className="relative min-h-screen bg-dark-900 overflow-hidden">
      <ScrollAnimations />
      
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Skills />
        <Contact />
      </motion.div>
    </main>
  )
}
