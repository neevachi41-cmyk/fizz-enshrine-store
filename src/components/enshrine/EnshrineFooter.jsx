import React from 'react'

function EnshrineFooter({ onOpenCustom }) {
  return (
    <footer id="contact">
      <div className="foot">
        <div>
          <div style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#c9c0d3',
            marginBottom: '10px'
          }}>
            THE ENSHRINE STORE
          </div>
          <p>Aesthetic gifts, personalised objects and tiny pieces of technology—made for brighter days.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <a href="#shop">Lamps</a>
          <br />
          <a href="#shop">Keychains</a>
          <br />
          <a href="#shop">Frames</a>
          <br />
          <a href="#shop">Desk Objects</a>
        </div>
        <div>
          <h4>Custom</h4>
          <a href="#custom">Custom Lamp</a>
          <br />
          <a href="#custom">Custom Keychain</a>
          <br />
          <a href="#custom">Custom Frame</a>
          <br />
          <a href="#custom">Custom OLED</a>
        </div>
        <div>
          <h4>Connect</h4>
          <p>Tell us what you want to make. We'll take it from there.</p>
          <button className="btn primary" onClick={() => onOpenCustom('General Enquiry')}>
            Talk to the team
          </button>
        </div>
      </div>
      <div className="copyright">© 2026 THE ENSHRINE STORE • GIFTS FOR BRIGHTER DAYS</div>
    </footer>
  )
}

export default EnshrineFooter
