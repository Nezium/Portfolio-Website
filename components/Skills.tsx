'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Database, 
  Settings,
  Award,
  Zap,
  Shield
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-blue-500 to-blue-600' },
        { name: 'HTML5', level: 98, color: 'from-blue-500 to-blue-600' },
        { name: 'CSS3', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Responsive Design', level: 90, color: 'from-blue-500 to-blue-600' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'PostgreSQL', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'REST APIs', level: 88, color: 'from-green-500 to-green-600' },
        { name: 'GraphQL', level: 70, color: 'from-green-500 to-green-600' },
        { name: 'Authentication', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Serverless', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'AWS/Vercel', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 82, color: 'from-green-500 to-green-600' },
        { name: 'JWT Security', level: 78, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: Settings,
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'from-slate-500 to-slate-600' },
        { name: 'VS Code/Cursor', level: 95, color: 'from-slate-500 to-slate-600' },
        { name: 'Figma Design', level: 80, color: 'from-slate-500 to-slate-600' },
        { name: 'Docker', level: 70, color: 'from-slate-500 to-slate-600' },
        { name: 'Testing', level: 75, color: 'from-slate-500 to-slate-600' },
        { name: 'Performance', level: 85, color: 'from-slate-500 to-slate-600' },
        { name: 'SEO Optimization', level: 80, color: 'from-slate-500 to-slate-600' },
        { name: 'Deployment', level: 88, color: 'from-slate-500 to-slate-600' },
        { name: 'CI/CD', level: 82, color: 'from-slate-500 to-slate-600' },
        { name: 'Monitoring', level: 78, color: 'from-slate-500 to-slate-600' },
      ]
    }
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
    <section id="skills" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-800/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full floating-element"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-500/40 rounded-full floating-element"></div>
      <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-purple-500/50 rounded-full floating-element"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white animate-on-scroll" data-animation="slide-up">
            Professional <span className="text-blue-400">Expertise</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-blue-200 max-w-3xl mx-auto px-4 animate-on-scroll" data-animation="fade-in">
            <strong className="text-white">Enterprise-grade development</strong> with proven technologies. 
            I build scalable, secure, and high-performance applications that drive business growth and exceed client expectations.
          </motion.p>
          
          
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-slate-600/50 transition-all duration-300"
              data-animation="scale-in"
            >
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-slate-600/30">
                  <category.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-300" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{category.title}</h3>
                <div className="w-12 sm:w-14 lg:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + categoryIndex * 0.2 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/20 hover:border-slate-500/40 rounded-lg p-2 sm:p-3 text-center transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="text-slate-300 font-medium text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        

      </div>
    </section>
  )
}

export default Skills
