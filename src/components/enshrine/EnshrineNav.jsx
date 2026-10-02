import React from 'react'

function EnshrineNav({ onOpenSearch, onOpenAdmin }) {
  return (
    <header>
      <nav className="nav">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>
          <div className="logo" style={{ 
            height: '54px', 
            width: 'auto', 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#6f46c7',
            display: 'flex',
            alignItems: 'center'
          }}>
            THE ENSHRINE STORE
          </div>
        </a>
        <div className="navlinks">
          <a href="#shop">Shop</a>
          <a href="#custom">Customise</a>
          <a href="#about">Our World</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="iconbtn" onClick={onOpenSearch} aria-label="Search">⌕</button>
          <button className="iconbtn" onClick={onOpenAdmin} aria-label="Admin">♙</button>
        </div>
      </nav>
    </header>
  )
}

export default EnshrineNav
