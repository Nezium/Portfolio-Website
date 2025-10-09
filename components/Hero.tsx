'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import GlobalParticles from './GlobalParticles'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.8)_0%,transparent_70%)]" />
      
      <AnimatedBackground />
      
      <div className="absolute inset-0 z-0">
        <GlobalParticles />
      </div>
      

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
      >
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 lg:mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 tracking-tight px-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <span className="text-white">Full Stack Developer</span>
          </motion.h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed font-light px-4"
        >
          I build websites and web applications using React, Next.js, and modern web technologies
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/25 border border-slate-600/50 text-sm sm:text-base"
          >
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center hover:border-slate-600/50 transition-all duration-300"
          >
            <div className="text-lg sm:text-xl font-bold text-white mb-1">Full-Stack</div>
            <div className="text-slate-400 text-xs sm:text-sm">Development</div>
            <div className="text-xs text-slate-500 mt-1">React • Next.js • TypeScript</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center hover:border-slate-600/50 transition-all duration-300"
          >
            <div className="text-lg sm:text-xl font-bold text-white mb-1">Modern</div>
            <div className="text-slate-400 text-xs sm:text-sm">Architecture</div>
            <div className="text-xs text-slate-500 mt-1">Scalable • Secure • Performance</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center hover:border-slate-600/50 transition-all duration-300"
          >
            <div className="text-lg sm:text-xl font-bold text-white mb-1">Clean</div>
            <div className="text-slate-400 text-xs sm:text-sm">Code Quality</div>
            <div className="text-xs text-slate-500 mt-1">Maintainable • Documented • Tested</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-3 sm:p-4 text-center hover:border-slate-600/50 transition-all duration-300"
          >
            <div className="text-lg sm:text-xl font-bold text-white mb-1">Security</div>
            <div className="text-slate-400 text-xs sm:text-sm">First Priority</div>
            <div className="text-xs text-slate-500 mt-1">Protected • Encrypted • Secure</div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-400 hover:text-slate-300 cursor-pointer transition-colors duration-300"
          onClick={scrollToAbout}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
