'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tamktos635@gmail.com',
      href: 'mailto:tamktos635@gmail.com'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/Nezium',
    }
  ]

  const socialLinks = [
  ]

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

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-800/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(15,23,42,0.3)_0%,transparent_50%)]" />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-15"></div>
        
        <div className="absolute top-20 right-20 w-20 h-20 border border-slate-700/15 rotate-45 opacity-25"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-slate-600/20 rotate-12 opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white animate-on-scroll">
            Get In <span className="text-slate-300">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto px-4 animate-on-scroll">
            Ready to bring your ideas to life? Let's discuss your next project. I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row lg:flex-row justify-center items-center gap-4 sm:gap-6 animate-on-scroll">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4 sm:p-5 hover:border-slate-600/50 transition-all duration-300 group w-full sm:w-auto sm:flex-1 max-w-sm"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm sm:text-base lg:text-lg">{info.title}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{info.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact
