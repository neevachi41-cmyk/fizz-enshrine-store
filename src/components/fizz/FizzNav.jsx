import React from 'react'

function FizzNav() {
  return (
    <nav>
      <div className="wrap navinner">
        <a className="logo" href="#">
          <img 
            src="/images/Enshrine-Logo.png" 
            alt="The Enshrine Store" 
            style={{ 
              height: '54px', 
              width: 'auto',
              display: 'block'
            }}
          />
        </a>
        <div className="navlinks">
          <a href="#shop">Shop</a>
          <a href="#moods">Moods</a>
          <a href="#custom">Custom</a>
          <a href="#story">About</a>
        </div>
      </div>
    </nav>
  )
}

export default FizzNav
