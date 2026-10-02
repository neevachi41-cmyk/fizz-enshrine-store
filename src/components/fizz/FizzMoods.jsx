import React from 'react'

function FizzMoods({ data }) {
  return (
    <section className="section wrap" id="moods">
      <div className="heading">
        <div>
          <span className="badge">pick a mood</span>
          <h2>your little world.</h2>
        </div>
      </div>
      <div className="moods">
        <article className="mood">
          <h3>{data.moods[0][0]}</h3>
          <p>{data.moods[0][1]}</p>
          <div className="tags">
            <span className="tag">Pastel</span>
            <span className="tag">Glow</span>
            <span className="tag">Cute tech</span>
            <span className="tag">Memories</span>
          </div>
        </article>
        <article className="mood">
          <h3>{data.moods[1][0]}</h3>
          <p>{data.moods[1][1]}</p>
          <div className="tags">
            <span className="tag">Desk setup</span>
            <span className="tag">OLED</span>
            <span className="tag">Robots</span>
            <span className="tag">Custom</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default FizzMoods
