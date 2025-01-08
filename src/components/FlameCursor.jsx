import { useRef, useEffect, useState, useCallback } from 'react'

const PARTICLE_COUNT = 25

export default function FlameCursor() {
  const containerRef = useRef(null)
  const particlesRef = useRef([])
  const mousePos = useRef({ x: -100, y: -100 })
  const animationRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: -100,
      y: -100,
      vx: 0,
      vy: 0,
      life: 0,
      maxLife: Math.random() * 30 + 20,
      size: Math.random() * 12 + 6,
      hue: Math.random() * 30 + 15
    }))
  }, [])

  const updateParticles = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    particlesRef.current.forEach((p, i) => {
      p.life++

      if (p.life >= p.maxLife) {
        p.life = 0
        p.maxLife = Math.random() * 30 + 20
        p.x = mousePos.current.x + (Math.random() - 0.5) * 10
        p.y = mousePos.current.y + (Math.random() - 0.5) * 10
        p.vx = (Math.random() - 0.5) * 2
        p.vy = -(Math.random() * 4 + 2)
        p.size = Math.random() * 14 + 8
        p.hue = Math.random() * 30 + 15
      }

      p.vy -= 0.05
      p.vx += (Math.random() - 0.5) * 0.3
      p.x += p.vx
      p.y += p.vy

      const lifeRatio = p.life / p.maxLife
      const element = container.children[i]
      if (element) {
        const scale = 1 - lifeRatio
        const opacity = (1 - lifeRatio) * 0.9
        const currentHue = p.hue + lifeRatio * 20
        
        element.style.transform = `translate(${p.x}px, ${p.y}px) scale(${scale})`
        element.style.opacity = opacity
        element.style.width = `${p.size}px`
        element.style.height = `${p.size}px`
        element.style.background = `radial-gradient(circle, 
          hsl(${currentHue}, 100%, 70%) 0%, 
          hsl(${currentHue + 15}, 100%, 50%) 40%, 
          hsl(${currentHue + 30}, 100%, 30%) 70%,
          transparent 100%)`
      }
    })

    animationRef.current = requestAnimationFrame(updateParticles)
  }, [])

  useEffect(() => {
    initParticles()

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    animationRef.current = requestAnimationFrame(updateParticles)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
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
        zIndex: 9999,
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: -20,
            top: -20,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            filter: 'blur(2px)',
            mixBlendMode: 'screen',
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  )
}
