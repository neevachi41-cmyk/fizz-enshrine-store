import React from 'react'

function FizzNav({ data, onToggleTheme }) {
  return (
    <nav>
      <div className="wrap navinner">
        <a className="logo" href="#">FIZZ<span>.</span></a>
        <div className="navlinks">
          <a href="#shop">Shop</a>
          <a href="#moods">Moods</a>
          <a href="#custom">Custom</a>
          <a href="#story">About</a>
        </div>
        <button className="theme" onClick={onToggleTheme} title="Switch between the pastel pink HER theme and pastel blue HIM theme">
          <span>{data.mode}</span>
          <span className="switch"><i></i></span>
        </button>
      </div>
    </nav>
  )
}

export default FizzNav
