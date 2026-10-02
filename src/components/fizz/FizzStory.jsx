import React from 'react'

function FizzStory({ data }) {
  return (
    <section className="section wrap" id="story">
      <div className="storybox">
        <div>
          <span className="badge">why FIZZ</span>
          <h2>{data.storyTitle}</h2>
        </div>
        <p>{data.storyText}</p>
      </div>
    </section>
  )
}

export default FizzStory
