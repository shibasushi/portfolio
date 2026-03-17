import { useRef, useEffect, useCallback } from 'react'

const PARTICLE_COUNT = 50

export default function BackgroundParticles() {
  const containerRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() * 40 + 15,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2
    }))
  }, [])

  const updateParticles = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const time = Date.now() * 0.001

    particlesRef.current.forEach((p, i) => {
      const dx = mousePos.current.x - p.x
      const dy = mousePos.current.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      
      if (dist < 150) {
        const force = (150 - dist) / 150 * 0.02
        p.vx -= (dx / dist) * force
        p.vy -= (dy / dist) * force
      }

      p.vx += (Math.random() - 0.5) * 0.01
      p.vy += (Math.random() - 0.5) * 0.01
      
      p.vx *= 0.99
      p.vy *= 0.99

      p.x += p.vx
      p.y += p.vy

      if (p.x < 0) p.x = window.innerWidth
      if (p.x > window.innerWidth) p.x = 0
      if (p.y < 0) p.y = window.innerHeight
      if (p.y > window.innerHeight) p.y = 0

      const pulse = Math.sin(time * p.pulseSpeed * 10 + p.pulseOffset) * 0.5 + 0.5
      const currentOpacity = p.opacity * (0.6 + pulse * 0.4)
      const currentSize = p.size * (0.8 + pulse * 0.4)

      const element = container.children[i]
      if (element) {
        element.style.transform = `translate(${p.x}px, ${p.y}px)`
        element.style.opacity = currentOpacity
        element.style.width = `${currentSize}px`
        element.style.height = `${currentSize}px`
        element.style.background = `radial-gradient(circle, 
          hsl(${p.hue}, 100%, 70%) 0%, 
          hsl(${p.hue + 10}, 100%, 50%) 50%,
          transparent 100%)`
        element.style.boxShadow = `0 0 ${currentSize * 2}px ${currentSize}px hsla(${p.hue}, 100%, 60%, ${currentOpacity * 0.3})`
      }
    })

    animationRef.current = requestAnimationFrame(updateParticles)
  }, [])

  useEffect(() => {
    initParticles()

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleResize = () => {
      particlesRef.current.forEach(p => {
        if (p.x > window.innerWidth) p.x = Math.random() * window.innerWidth
        if (p.y > window.innerHeight) p.y = Math.random() * window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    animationRef.current = requestAnimationFrame(updateParticles)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initParticles, updateParticles])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: -5,
            top: -5,
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            willChange: 'transform, opacity, background, box-shadow'
          }}
        />
      ))}
    </div>
  )
}
