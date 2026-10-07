import React from 'react'

function EnshrineNav({ onOpenSearch }) {
  return (
    <header>
      <nav className="nav">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>
          <img 
            src="/images/Enshrine-Logo.png" 
            alt="The Enshrine Store" 
            className="logo"
            style={{ 
              height: '54px', 
              width: 'auto',
              display: 'block'
            }}
          />
        </a>
        <div className="navlinks">
          <a href="#shop">Shop</a>
          <a href="#custom">Customise</a>
          <a href="#about">Our World</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="iconbtn" onClick={onOpenSearch} aria-label="Search">⌕</button>
        </div>
      </nav>
    </header>
  )
}

export default EnshrineNav
