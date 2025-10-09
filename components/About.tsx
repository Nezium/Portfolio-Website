'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Users, Zap, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const stats = [
    { icon: Code2, value: 'ULTRA', label: 'FAST' },
    { icon: Users, value: '100%', label: 'Client Focus' },
    { icon: Zap, value: 'Full-Stack', label: 'Expertise' },
    { icon: Award, value: 'Competitive', label: 'Pricing' },
  ]

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(15,23,42,0.3)_0%,transparent_50%)]" />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        <div className="absolute top-10 right-10 w-16 h-16 border border-slate-700/20 rotate-45 opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 border border-slate-600/25 rotate-12 opacity-25"></div>
        
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-slate-600 rounded-full opacity-40 floating-element"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-slate-500 rounded-full opacity-30 floating-element"></div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-50 floating-element"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-40 floating-element"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-50"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-start lg:items-center"
        >
          <motion.div variants={itemVariants} className="animate-on-scroll">
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 mb-3 sm:mb-4 leading-relaxed animate-on-scroll" data-animation="fade-in">
              I'm a dedicated Full Stack Developer who delivers <strong className="text-white">complete web solutions for any organization</strong>. 
              Specializing in React, Next.js, and TypeScript, I build scalable applications for businesses, schools, nonprofits, 
              and any organization that needs a professional online presence.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 mb-4 sm:mb-6 leading-relaxed animate-on-scroll" data-animation="fade-in">
              <strong className="text-white">Perfect for any organization</strong> - from startups and small businesses to schools, 
              nonprofits, and community groups. I provide full-stack expertise, from pixel-perfect frontends to robust backends, 
              with clear communication and reliable delivery at competitive rates.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-medium transition-all duration-300 hover:from-slate-600 hover:to-slate-700 hover:shadow-xl hover:shadow-slate-500/25 border border-slate-600/50 inline-flex items-center gap-2 text-xs sm:text-sm lg:text-base animate-on-scroll"
              data-animation="slide-up"
            >
              Let's Discuss Your Project
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 animate-on-scroll lg:mt-4" data-animation="scale-in">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 p-2 sm:p-3 lg:p-4 rounded-lg text-center hover:border-slate-600/50 transition-all duration-300 animate-on-scroll"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                data-animation="bounce-in"
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-slate-400 mx-auto mb-1 sm:mb-2" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
