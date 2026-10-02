import React, { useState } from 'react'

function EnshrineAdmin({ 
  isAdmin, 
  products, 
  onLogin, 
  onLogout, 
  onShowStore, 
  onOpenProductEditor, 
  onRemoveProduct, 
  onResetProducts,
  editProduct,
  onCloseProductEditor,
  onSaveProduct
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
  }

  const handleSaveSubmit = (e) => {
    e.preventDefault()
    const product = {
      id: editProduct.id,
      cat: document.getElementById('eCat').value,
      sub: document.getElementById('eSub').value,
      name: document.getElementById('eName').value,
      desc: document.getElementById('eDesc').value,
      price: document.getElementById('ePrice').value,
      img: document.getElementById('eImg').value,
      custom: document.getElementById('eCustom').checked
    }
    onSaveProduct(product)
  }

  if (!isAdmin) {
    return (
      <section className="admin-panel show">
        <div className="admin-wrap">
          <div className="admin-login">
            <span className="eyebrow">PRIVATE AREA</span>
            <h2 style={{ font: '600 36px "Playfair Display", serif' }}>Store Admin</h2>
            <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
              Add, edit or remove products from this browser.
            </p>
            <form onSubmit={handleLoginSubmit}>
              <div className="field" style={{ marginTop: '16px' }}>
                <label>Email</label>
                <input 
                  id="adminEmail"
                  type="email" 
                  placeholder="admin@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field" style={{ marginTop: '12px' }}>
                <label>Password</label>
                <input 
                  id="adminPass"
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button 
                className="btn primary" 
                style={{ width: '100%', marginTop: '16px' }}
                type="submit"
              >
                Login
              </button>
            </form>
            <p style={{ fontSize: '11px', color: '#9b91a4', marginTop: '12px' }}>
              Demo credentials are stored in the front-end. For production, replace with secure server-side authentication.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="admin-panel show">
      <div className="admin-wrap">
        <div className="admin-top">
          <div>
            <span className="eyebrow">CONTROL ROOM</span>
            <h2 style={{ font: '600 36px "Playfair Display", serif', margin: '6px 0' }}>
              Product Manager
            </h2>
          </div>
          <div>
            <button className="btn soft" onClick={onShowStore}>← Store</button>
            <button className="btn dark" onClick={onLogout}>Logout</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '18px' }}>
          <button className="btn primary" onClick={() => onOpenProductEditor(null)}>
            + Add product
          </button>
          <button className="btn soft" onClick={onResetProducts}>
            Reset demo products
          </button>
        </div>
        <div style={{ overflow: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>
                    <div style={{ 
                      fontSize: '30px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: '55px',
                      height: '55px',
                      background: 'var(--lav)',
                      borderRadius: '10px'
                    }}>
                      {p.cat === 'Lamps' ? '💡' : 
                       p.cat === 'Keychains' ? '🔑' :
                       p.cat === 'Frames' ? '🖼️' :
                       p.cat === 'Stands & Holders' ? '📱' :
                       p.cat === 'OLED & Electronics' ? '🤖' : '🎨'}
                    </div>
                  </td>
                  <td>
                    <b>{p.name}</b>
                    <br />
                    <span style={{ color: 'var(--muted)' }}>{p.sub}</span>
                  </td>
                  <td>{p.cat}</td>
                  <td>{p.price}</td>
                  <td>
                    <button className="smallbtn" onClick={() => onOpenProductEditor(p.id)}>
                      Edit
                    </button>
                    <button className="smallbtn" onClick={() => onRemoveProduct(p.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editProduct && (
        <div className="modal show">
          <div className="modal-box">
            <div className="modal-head">
              <h2 style={{ font: '600 28px "Playfair Display", serif' }}>
                {products.find(p => p.id === editProduct.id) ? 'Edit' : 'Add'} product
              </h2>
              <button className="close" onClick={onCloseProductEditor}>×</button>
            </div>
            <form onSubmit={handleSaveSubmit}>
              <div className="form-grid">
                <div className="field full">
                  <label>Name</label>
                  <input id="eName" defaultValue={editProduct.name} />
                </div>
                <div className="field">
                  <label>Category</label>
                  <select id="eCat" defaultValue={editProduct.cat}>
                    <option>Lamps</option>
                    <option>Keychains</option>
                    <option>Frames</option>
                    <option>Stands & Holders</option>
                    <option>OLED & Electronics</option>
                    <option>3D Printed Decor</option>
                  </select>
                </div>
                <div className="field">
                  <label>Sub-category</label>
                  <input id="eSub" defaultValue={editProduct.sub} />
                </div>
                <div className="field">
                  <label>Price label</label>
                  <input id="ePrice" defaultValue={editProduct.price} />
                </div>
                <div className="field full">
                  <label>Description</label>
                  <textarea id="eDesc" defaultValue={editProduct.desc} />
                </div>
                <div className="field">
                  <label>
                    <input 
                      type="checkbox" 
                      id="eCustom" 
                      defaultChecked={editProduct.custom}
                    /> Customisable
                  </label>
                </div>
              </div>
              <button 
                className="btn primary" 
                style={{ width: '100%', marginTop: '16px' }}
                type="submit"
              >
                Save product
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default EnshrineAdmin
