import { useRef, useEffect, useState, useCallback } from 'react'

const PARTICLE_COUNT = 40

export default function FlameCursor() {
  const containerRef = useRef(null)
  const particlesRef = useRef([])
  const mousePos = useRef({ x: -100, y: -100 })
  const prevMousePos = useRef({ x: -100, y: -100 })
  const velocity = useRef({ x: 0, y: 0 })
  const smoothMouse = useRef({ x: -100, y: -100 })
  const animationRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: -100,
      y: -100,
      vx: 0,
      vy: 0,
      life: Math.random() * 40,
      maxLife: Math.random() * 40 + 30,
      size: Math.random() * 20 + 12,
      hue: 25,
      delay: i * 0.5
    }))
  }, [])

  const getDirectionColor = useCallback((vx, vy) => {
    const speed = Math.sqrt(vx * vx + vy * vy)
    const angle = Math.atan2(vy, vx) * (180 / Math.PI)
    
    if (speed < 2) {
      return { hue: 25, saturation: 100, lightness: 55 }
    }
    
    if (angle > -45 && angle <= 45) {
      return { hue: 200, saturation: 100, lightness: 60 }
    } else if (angle > 45 && angle <= 135) {
      return { hue: 280, saturation: 100, lightness: 60 }
    } else if (angle > -135 && angle <= -45) {
      return { hue: 120, saturation: 100, lightness: 50 }
    } else {
      return { hue: 25, saturation: 100, lightness: 55 }
    }
  }, [])

  const updateParticles = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    smoothMouse.current.x += (mousePos.current.x - smoothMouse.current.x) * 0.15
    smoothMouse.current.y += (mousePos.current.y - smoothMouse.current.y) * 0.15

    velocity.current.x = smoothMouse.current.x - prevMousePos.current.x
    velocity.current.y = smoothMouse.current.y - prevMousePos.current.y
    
    prevMousePos.current.x = smoothMouse.current.x
    prevMousePos.current.y = smoothMouse.current.y

    const dirColor = getDirectionColor(velocity.current.x, velocity.current.y)
    const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)

    particlesRef.current.forEach((p, i) => {
      p.life++

      if (p.life >= p.maxLife) {
        p.life = 0
        p.maxLife = Math.random() * 40 + 30
        
        const spread = 15 + speed * 2
        p.x = smoothMouse.current.x + (Math.random() - 0.5) * spread
        p.y = smoothMouse.current.y + (Math.random() - 0.5) * spread
        
        p.vx = (Math.random() - 0.5) * 3 + velocity.current.x * 0.3
        p.vy = -(Math.random() * 5 + 3) + velocity.current.y * 0.2
        
        p.size = Math.random() * 24 + 14 + speed * 0.5
        p.hue = dirColor.hue + (Math.random() - 0.5) * 20
        p.saturation = dirColor.saturation
        p.lightness = dirColor.lightness
      }

      p.vy -= 0.08
      p.vx *= 0.98
      p.vx += (Math.random() - 0.5) * 0.4
      p.x += p.vx
      p.y += p.vy

      const lifeRatio = p.life / p.maxLife
      const element = container.children[i]
      
      if (element) {
        const scale = Math.pow(1 - lifeRatio, 0.5)
        const opacity = Math.pow(1 - lifeRatio, 0.7) * 0.95
        
        const hueShift = lifeRatio * 30
        const currentHue = p.hue + hueShift
        const currentLightness = p.lightness - lifeRatio * 25
        
        element.style.transform = `translate(${p.x}px, ${p.y}px) scale(${scale})`
        element.style.opacity = opacity
        element.style.width = `${p.size}px`
        element.style.height = `${p.size}px`
        element.style.background = `radial-gradient(circle at 30% 30%, 
          hsl(${currentHue - 10}, ${p.saturation}%, ${currentLightness + 20}%) 0%, 
          hsl(${currentHue}, ${p.saturation}%, ${currentLightness + 10}%) 25%, 
          hsl(${currentHue + 15}, ${p.saturation}%, ${currentLightness}%) 50%,
          hsl(${currentHue + 25}, ${p.saturation - 10}%, ${currentLightness - 15}%) 75%,
          transparent 100%)`
        element.style.boxShadow = `0 0 ${10 + speed}px ${4 + speed * 0.5}px hsla(${currentHue}, ${p.saturation}%, ${currentLightness}%, ${opacity * 0.5})`
      }
    })

    animationRef.current = requestAnimationFrame(updateParticles)
  }, [getDirectionColor])

  useEffect(() => {
    initParticles()

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) {
        smoothMouse.current = { x: e.clientX, y: e.clientY }
        prevMousePos.current = { x: e.clientX, y: e.clientY }
      }
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
  }, [initParticles, updateParticles, isVisible])

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
            left: -30,
            top: -30,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            filter: 'blur(3px)',
            mixBlendMode: 'screen',
            willChange: 'transform, opacity, background, box-shadow'
          }}
        />
      ))}
    </div>
  )
}
