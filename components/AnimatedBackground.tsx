'use client'

import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 border border-slate-700/20 rotate-45 opacity-30"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 right-20 w-24 h-24 border border-slate-600/15 rotate-12 opacity-25"
      />
      
      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-40 left-1/4 w-40 h-40 border border-slate-700/10 rotate-45 opacity-20"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-1/3 w-20 h-20 border border-slate-600/20 rotate-12 opacity-30"
      />

      <motion.div
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"
      />
      
      <motion.div
        animate={{
          x: ['100%', '-100%'],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600/20 to-transparent"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-slate-800/20 to-transparent"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-slate-800/15 to-transparent"
      />

      <motion.div
        animate={{
          y: [-20, 20, -20],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/3 w-2 h-2 bg-slate-600 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [20, -20, 20],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-slate-500 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [-15, 15, -15],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-slate-700 rounded-full"
      />
    </div>
  )
}

export default AnimatedBackground
