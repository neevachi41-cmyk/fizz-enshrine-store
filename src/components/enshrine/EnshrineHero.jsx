import React, { useState, useEffect, useRef } from 'react'

function EnshrineHero({ onOpenCustom }) {
  const heroImages = [
    '/images/hero-s1.jpeg',
    '/images/hero-s2.jpeg',
    '/images/hero-s3.jpeg',
    '/images/hero-s4.jpeg',
    '/images/hero-s5.jpeg'
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoplayRef = useRef(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Autoplay
  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [currentSlide, isPaused])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <section 
      className="hero-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#f8f7ff',
        display: 'block'
      }}
    >
      {/* Logo Overlay */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '30',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '12px 24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <img 
          src="/images/Enshrine-Logo.png" 
          alt="The Enshrine Store" 
          style={{ 
            height: '40px', 
            width: 'auto',
            display: 'block'
          }}
        />
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}>
        <div 
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 900ms ease-in-out'
          }}
        >
          {heroImages.map((image, index) => (
            <div key={index} style={{
              flex: '0 0 100%',
              width: '100%',
              height: '100%',
              position: 'relative',
              flexShrink: 0
            }}>
              <img 
                src={image} 
                alt={`Hero slide ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={previousSlide}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            border: 'none',
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(8px)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: 'white',
            opacity: '0.8',
            transition: 'all 0.3s ease',
            zIndex: '20'
          }}
        >
          ‹
        </button>
        <button 
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            border: 'none',
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(8px)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: 'white',
            opacity: '0.8',
            transition: 'all 0.3s ease',
            zIndex: '20'
          }}
        >
          ›
        </button>

        {/* Pagination Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: '20'
        }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: '12px',
                height: '12px',
                border: 'none',
                borderRadius: '50%',
                background: index === currentSlide ? 'white' : 'rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '0',
                transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnshrineHero
