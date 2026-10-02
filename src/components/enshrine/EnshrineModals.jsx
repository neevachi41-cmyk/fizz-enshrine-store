import React, { useState } from 'react'

function EnshrineModals({
  showCustomModal,
  customTitle,
  onCloseCustomModal,
  onSendCustom,
  showProductModal,
  selectedProduct,
  onCloseProductModal,
  onProductToCustom,
  showSearchModal,
  searchQuery,
  searchResults,
  onCloseSearchModal,
  onSearch,
  onViewProduct
}) {
  const [customForm, setCustomForm] = useState({
    name: '',
    phone: '',
    product: '',
    details: ''
  })

  const handleCustomSubmit = (e) => {
    e.preventDefault()
    onSendCustom(customForm)
    setCustomForm({ name: '', phone: '', product: '', details: '' })
  }

  const handleCustomInputChange = (field, value) => {
    setCustomForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Custom Modal */}
      {showCustomModal && (
        <div className="modal show">
          <div className="modal-box">
            <div className="modal-head">
              <div>
                <span className="eyebrow">CUSTOM ORDER</span>
                <h2 style={{ font: '600 30px "Playfair Display", serif', margin: '6px 0' }}>
                  {customTitle}
                </h2>
              </div>
              <button className="close" onClick={onCloseCustomModal}>×</button>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
              Share the idea. You don't need to create an account.
            </p>
            <form onSubmit={handleCustomSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label>Your name</label>
                  <input 
                    placeholder="Your name"
                    value={customForm.name}
                    onChange={(e) => handleCustomInputChange('name', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Phone / WhatsApp</label>
                  <input 
                    placeholder="+91 ..."
                    value={customForm.phone}
                    onChange={(e) => handleCustomInputChange('phone', e.target.value)}
                  />
                </div>
                <div className="field full">
                  <label>What would you like?</label>
                  <input 
                    placeholder="e.g. personalised moon lamp"
                    value={customForm.product}
                    onChange={(e) => handleCustomInputChange('product', e.target.value)}
                  />
                </div>
                <div className="field full">
                  <label>Details</label>
                  <textarea 
                    placeholder="Photo, name, quote, colour, size, reference idea..."
                    value={customForm.details}
                    onChange={(e) => handleCustomInputChange('details', e.target.value)}
                  />
                </div>
              </div>
              <button 
                className="btn primary" 
                style={{ width: '100%', marginTop: '16px' }}
                type="submit"
              >
                Send to Enshrine team →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showProductModal && selectedProduct && (
        <div className="modal show">
          <div className="modal-box">
            <div className="modal-head">
              <div>
                <span className="eyebrow">PRODUCT</span>
                <h2 style={{ font: '600 30px "Playfair Display", serif', margin: '6px 0' }}>
                  {selectedProduct.name}
                </h2>
              </div>
              <button className="close" onClick={onCloseProductModal}>×</button>
            </div>
            <div 
              style={{ 
                width: '100%', 
                maxHeight: '330px', 
                background: 'var(--lav)', 
                borderRadius: '18px', 
                margin: '12px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px'
              }}
            >
              {selectedProduct.cat === 'Lamps' ? '💡' : 
               selectedProduct.cat === 'Keychains' ? '🔑' :
               selectedProduct.cat === 'Frames' ? '🖼️' :
               selectedProduct.cat === 'Stands & Holders' ? '📱' :
               selectedProduct.cat === 'OLED & Electronics' ? '🤖' : '🎨'}
            </div>
            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
              {selectedProduct.desc}
            </p>
            <div style={{ fontWeight: 800, fontSize: '20px', margin: '12px 0' }}>
              {selectedProduct.price}
            </div>
            <button 
              className="btn primary" 
              style={{ width: '100%' }}
              onClick={onProductToCustom}
            >
              Customise / enquire about this →
            </button>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div className="modal show">
          <div className="modal-box">
            <div className="modal-head">
              <div>
                <span className="eyebrow">SEARCH</span>
                <h2 style={{ font: '600 30px "Playfair Display", serif', margin: '6px 0' }}>
                  Find something.
                </h2>
              </div>
              <button className="close" onClick={onCloseSearchModal}>×</button>
            </div>
            <input 
              style={{ 
                width: '100%', 
                border: '1px solid var(--line)', 
                borderRadius: '14px', 
                padding: '14px' 
              }} 
              placeholder="Search lamps, keychains, OLED..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              autoFocus
            />
            <div style={{ marginTop: '14px' }}>
              {searchQuery ? (
                searchResults.map(p => (
                  <div 
                    key={p.id}
                    style={{ 
                      display: 'flex', 
                      gap: '12px', 
                      padding: '10px 0', 
                      borderBottom: '1px solid var(--line)', 
                      alignItems: 'center' 
                    }}
                  >
                    <div style={{ 
                      fontSize: '40px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: '58px',
                      height: '58px',
                      background: 'var(--lav)',
                      borderRadius: '10px'
                    }}>
                      {p.cat === 'Lamps' ? '💡' : 
                       p.cat === 'Keychains' ? '🔑' :
                       p.cat === 'Frames' ? '🖼️' :
                       p.cat === 'Stands & Holders' ? '📱' :
                       p.cat === 'OLED & Electronics' ? '🤖' : '🎨'}
                    </div>
                    <div>
                      <b>{p.name}</b>
                      <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
                        {p.cat} • {p.price}
                      </div>
                    </div>
                    <button 
                      className="smallbtn" 
                      style={{ marginLeft: 'auto' }}
                      onClick={() => {
                        onCloseSearchModal()
                        onViewProduct(p.id)
                      }}
                    >
                      View
                    </button>
                  </div>
                ))
              ) : (
                <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
                  Try "lamp", "OLED", "keychain", "desk" or "frame".
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EnshrineModals
