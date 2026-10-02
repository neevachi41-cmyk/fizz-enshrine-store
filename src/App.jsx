import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import FizzApp from './components/fizz/FizzApp'
import EnshrineApp from './components/enshrine/EnshrineApp'

function App({ page }) {
  const location = useLocation()
  const currentPage = page || (location.pathname === '/enshrine' ? 'enshrine' : 'fizz')

  return (
    <div>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#fff',
        padding: '10px 20px',
        borderBottom: '1px solid #e5e5e5',
        zIndex: 1000,
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
      }}>
        <Link to="/fizz" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>FIZZ</Link>
        <Link to="/enshrine" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Enshrine Store</Link>
      </nav>
      <div style={{ marginTop: '60px' }}>
        {currentPage === 'fizz' ? <FizzApp /> : <EnshrineApp />}
      </div>
    </div>
  )
}

export default App
