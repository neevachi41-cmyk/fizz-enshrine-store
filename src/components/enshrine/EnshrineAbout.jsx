import React from 'react'

function EnshrineAbout({ onOpenCustom }) {
  return (
    <div className="mascot-note" id="about">
      <div style={{ 
        fontSize: '100px', 
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        🎀
      </div>
      <div>
        <span className="eyebrow">THE ENSHRINE WORLD</span>
        <h3>A little store for things worth keeping.</h3>
        <p>We make cute, clever and personal objects for desks, rooms, bags and the people you love. Some are ready-made. Some begin with your photo or idea. Everything is made to feel like it belongs to you.</p>
      </div>
    </div>
  )
}

export default EnshrineAbout
