'use client'

import { useEffect } from 'react'

const ScrollAnimations = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const navLinks = document.querySelectorAll('nav a[href^="#"]')
      
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || ''
        }
      })

      navLinks.forEach(link => {
        link.classList.remove('text-blue-400')
        link.classList.add('text-blue-300')
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.remove('text-blue-300')
          link.classList.add('text-blue-400')
        }
      })
    }

    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || '0.5'
        const yPos = -(scrolled * parseFloat(speed))
        element.style.transform = `translateY(${yPos}px)`
      })

      const floatingElements = document.querySelectorAll('.floating-element')
      floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1)
        const yPos = Math.sin(scrolled * 0.01 + index) * 20
        const xPos = Math.cos(scrolled * 0.01 + index) * 10
        element.style.transform = `translate(${xPos}px, ${yPos}px)`
      })

      const scaleElements = document.querySelectorAll('.scale-on-scroll')
      scaleElements.forEach(element => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
          const scale = 0.8 + (progress * 0.2)
          element.style.transform = `scale(${scale})`
        }
      })
    }

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated')
          
          const animationType = entry.target.getAttribute('data-animation') || 'fade-in'
          
          if (entry.target.classList.contains('animate-on-scroll')) {
            entry.target.classList.add(`animate-${animationType}`)
          }
          
          const children = entry.target.querySelectorAll('.animate-on-scroll')
          children.forEach((child, index) => {
            if (!child.classList.contains('animated')) {
              child.classList.add('animated')
              const childAnimationType = child.getAttribute('data-animation') || 'fade-in'
              setTimeout(() => {
                child.classList.add(`animate-${childAnimationType}`)
              }, index * 200)
            }
          })
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    
    sections.forEach(section => {
      observer.observe(section)
    })
    
    animatedElements.forEach(element => {
      observer.observe(element)
    })

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleParallax)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleParallax)
      observer.disconnect()
    }
  }, [])

  return null
}

export default ScrollAnimations
