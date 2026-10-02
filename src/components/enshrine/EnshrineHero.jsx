import React from 'react'

function EnshrineHero({ onOpenCustom }) {
  return (
    <section className="hero">
      <div>
        <span className="eyebrow">THE ENSHRINE STORE</span>
        <h1>Gifts that feel <em>personal.</em></h1>
        <p>A curated world of personalised lamps, tiny tech, 3D printed desk pieces, memory frames and objects made to say what words sometimes can't.</p>
        <div className="cta">
          <a className="btn primary" href="#shop">Explore the store</a>
          <button className="btn soft" onClick={() => onOpenCustom('General Customisation')}>Create something yours</button>
        </div>
      </div>
      <div className="hero-card">
        <div style={{ 
          fontSize: '120px', 
          textAlign: 'center',
          color: '#6f46c7'
        }}>
          🎁
        </div>
      </div>
    </section>
  )
}

export default EnshrineHero
