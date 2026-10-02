import React from 'react'

function FizzCustom({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Your custom idea has been captured. Connect this form to WhatsApp, email or your backend to receive real orders.')
  }

  return (
    <section className="section wrap" id="custom">
      <div className="custom">
        <div>
          <span className="badge">make yours</span>
          <h2 dangerouslySetInnerHTML={{ __html: data.customTitle }}></h2>
          <p>{data.customText}</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label>WHAT ARE YOU MAKING?</label>
          <select>
            <option>Custom lamp</option>
            <option>Mini robot</option>
            <option>OLED badge</option>
            <option>3D printed object</option>
            <option>Something completely new</option>
          </select>
          <label>YOUR NAME</label>
          <input placeholder="Your name" />
          <label>YOUR IDEA</label>
          <input placeholder="Tell us the vibe..." />
          <button className="btn primary" style={{ width: '100%' }}>Send the idea ✦</button>
        </form>
      </div>
    </section>
  )
}

export default FizzCustom
