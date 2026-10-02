import React from 'react'

function EnshrineShop({ cats, selectedCat, products, onSelectCat, onOpenCustom, onViewProduct }) {
  const getCategoryDescription = (cat) => {
    const descriptions = {
      "Lamps": "Personalised and ready-to-gift lighting for rooms, desks and bedside corners.",
      "Keychains": "Tiny objects with personality, including OLED pieces.",
      "Frames": "Memories and artwork turned into display pieces.",
      "Stands & Holders": "Useful desk objects that are designed to look good.",
      "OLED & Electronics": "Tiny interactive tech made to live on your desk or bag.",
      "3D Printed Decor": "3D printed decor, vases and collectible objects."
    }
    return descriptions[cat] || ""
  }

  const renderCard = (product) => (
    <article className="product" key={product.id}>
      <div className="pimg">
        <div style={{ 
          fontSize: '60px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}>
          {product.cat === 'Lamps' ? '💡' : 
           product.cat === 'Keychains' ? '🔑' :
           product.cat === 'Frames' ? '🖼️' :
           product.cat === 'Stands & Holders' ? '📱' :
           product.cat === 'OLED & Electronics' ? '🤖' : '🎨'}
        </div>
      </div>
      <div className="pbody">
        <div className="tag">{product.sub}</div>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="price">{product.price}</div>
        <div className="card-actions">
          <button className="smallbtn" onClick={() => onViewProduct(product.id)}>View</button>
          <button className="smallbtn primary" onClick={() => onOpenCustom(product.name)}>
            {product.custom ? "Customise" : "Enquire"}
          </button>
        </div>
      </div>
    </article>
  )

  return (
    <section className="section" id="shop">
      <div className="section-head">
        <div>
          <span className="eyebrow">THE COLLECTION</span>
          <h2>Find your kind of thing.</h2>
        </div>
        <p>Start with a custom piece or browse our ready-to-gift designs. No customer account needed.</p>
      </div>
      <div className="cat-strip">
        <button 
          className={`cat-chip ${selectedCat === 'all' ? 'active' : ''}`} 
          onClick={() => onSelectCat('all')}
        >
          All
        </button>
        {cats.map(cat => (
          <button 
            key={cat}
            className={`cat-chip ${selectedCat === cat ? 'active' : ''}`} 
            onClick={() => onSelectCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="custom-banner" id="custom">
        <div>
          <h3>Make it yours.</h3>
          <p>Photo • Name • Quote • Memory • Character • Idea</p>
        </div>
        <button className="btn primary" onClick={() => onOpenCustom('General Customisation')}>
          Start a custom order →
        </button>
      </div>
      <div id="productSections">
        {selectedCat === 'all' ? (
          cats.map(cat => {
            const list = products.filter(p => p.cat === cat)
            if (!list.length) return null
            return (
              <div className="section" key={cat} style={{ padding: '28px 0' }}>
                <div className="section-head">
                  <div>
                    <span className="eyebrow">{cat}</span>
                    <h2>{cat}</h2>
                  </div>
                  <p>{getCategoryDescription(cat)}</p>
                </div>
                <div className="grid">
                  {list.map(renderCard)}
                </div>
              </div>
            )
          })
        ) : (
          <div className="section" style={{ padding: '28px 0' }}>
            <div className="section-head">
              <div>
                <span className="eyebrow">{selectedCat}</span>
                <h2>{selectedCat}</h2>
              </div>
              <p>{getCategoryDescription(selectedCat)}</p>
            </div>
            <div className="grid">
              {products.map(renderCard)}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default EnshrineShop
