import React, { useState, useEffect } from 'react'
import EnshrineNav from './EnshrineNav'
import EnshrineHero from './EnshrineHero'
import EnshrineShop from './EnshrineShop'
import EnshrineAbout from './EnshrineAbout'
import EnshrineFooter from './EnshrineFooter'
import EnshrineModals from './EnshrineModals'
import './EnshrineApp.css'

const DEMO_PRODUCTS = [
  { id: "lamp-custom", cat: "Lamps", sub: "Personalised Lamps", name: "Design Your Own Lamp", desc: "Turn a memory, face, name or idea into a lamp made just for you.", price: "Custom Quote", custom: true },
  { id: "lamp-face", cat: "Lamps", sub: "Personalised Lamps", name: "Custom Face Memory Lamp", desc: "Your photo transformed into a warm illuminated keepsake.", price: "From ₹899", custom: true },
  { id: "lamp-moon", cat: "Lamps", sub: "Personalised Moon Lamps", name: "Personalised Moon Lamp", desc: "A moon lamp printed with your photo, message or date.", price: "From ₹799", custom: true },
  { id: "lamp-flower", cat: "Lamps", sub: "Stock Design Lamps", name: "Lily Glow Table Lamp", desc: "A sculptural floral lamp designed for a calm desk or bedside corner.", price: "From ₹699" },
  { id: "lamp-character", cat: "Lamps", sub: "Stock Design Lamps", name: "Character Mood Lamp", desc: "A playful sculptural lamp that doubles as desk decor.", price: "From ₹649" },
  { id: "key-custom", cat: "Keychains", sub: "Custom Keychains", name: "Create Your Keychain", desc: "Your name, character, mini object or idea—turned into a pocket-sized piece.", price: "Custom Quote", custom: true },
  { id: "key-oled", cat: "Keychains", sub: "OLED Keychains", name: "OLED Expression Keychain", desc: "A tiny electronic keychain with changing expressions and animations.", price: "From ₹499" },
  { id: "key-stock", cat: "Keychains", sub: "Stock Keychains", name: "Mini Robot Keychain", desc: "A small 3D printed robot collectible for your keys or bag.", price: "From ₹199" },
  { id: "frame-custom", cat: "Frames", sub: "Custom Frames", name: "Design Your Frame", desc: "Turn a memory, artwork or moment into a personalised display piece.", price: "Custom Quote", custom: true },
  { id: "frame-stock", cat: "Frames", sub: "Stock Frames", name: "Minimal Memory Frame", desc: "A clean, modern frame for your favourite photos and moments.", price: "From ₹499" },
  { id: "stand-phone", cat: "Stands & Holders", sub: "Phone Stands", name: "Bot Phone Stand", desc: "A tiny robot that holds your phone with personality.", price: "From ₹399" },
  { id: "oled-badge", cat: "OLED & Electronics", sub: "OLED Badges", name: "OLED Name Badge", desc: "Your name, animation or message on a tiny screen.", price: "From ₹599" },
  { id: "decor-vase", cat: "3D Printed Decor", sub: "Vases", name: "Geometric Mini Vase", desc: "A small aesthetic vase for dried flowers or tiny plants.", price: "From ₹449" }
]

const CATS = ["Lamps", "Keychains", "Frames", "Stands & Holders", "OLED & Electronics", "3D Printed Decor"]

function EnshrineApp() {
  const [products, setProducts] = useState([])
  const [selectedCat, setSelectedCat] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [showProductModal, setShowProductModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [customTitle, setCustomTitle] = useState('Make it yours')
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem("enshrineProducts")
    setProducts(stored ? JSON.parse(stored) : DEMO_PRODUCTS)
  }, [])

  const saveProducts = (newProducts) => {
    setProducts(newProducts)
    localStorage.setItem("enshrineProducts", JSON.stringify(newProducts))
  }

  const handleOpenCustom = (title) => {
    setCustomTitle(title === "General Customisation" ? "Make it yours" : title)
    setShowCustomModal(true)
  }

  const handleCloseCustomModal = () => {
    setShowCustomModal(false)
  }

  const handleSendCustom = (data) => {
    const msg = `Hello Enshrine Store!%0A%0AI want to enquire about: ${encodeURIComponent(data.product || "a custom product")}%0AName: ${encodeURIComponent(data.name || "Not provided")}%0APhone: ${encodeURIComponent(data.phone || "Not provided")}%0ADetails: ${encodeURIComponent(data.details || "Not provided")}`
    const num = localStorage.getItem("enshrineWhatsApp") || "919999999999"
    window.open(`https://wa.me/${num}?text=${msg}`, "_blank")
    showToast("Opening WhatsApp with your enquiry…")
    handleCloseCustomModal()
  }

  const handleViewProduct = (id) => {
    const product = products.find(p => p.id === id)
    if (product) {
      setSelectedProduct(product)
      setShowProductModal(true)
    }
  }

  const handleCloseProductModal = () => {
    setShowProductModal(false)
    setSelectedProduct(null)
  }

  const handleProductToCustom = () => {
    handleCloseProductModal()
    handleOpenCustom(selectedProduct?.name || "Product enquiry")
  }

  const handleOpenSearch = () => {
    setShowSearchModal(true)
  }

  const handleCloseSearchModal = () => {
    setShowSearchModal(false)
    setSearchQuery('')
  }

  const handleDoSearch = (query) => {
    setSearchQuery(query)
  }

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 2600)
  }

  const getFilteredProducts = () => {
    if (selectedCat === 'all') return products
    return products.filter(p => p.cat === selectedCat)
  }

  const getSearchResults = () => {
    if (!searchQuery) return []
    const q = searchQuery.toLowerCase()
    return products.filter(p => 
      (p.name + " " + p.cat + " " + p.sub + " " + p.desc).toLowerCase().includes(q)
    ).slice(0, 12)
  }

  return (
    <div className="enshrine-app">
      <div className="topbar">PERSONALISED OBJECTS • 3D PRINTED DESIGN • TINY TECH • GIFTS WITH A STORY</div>
      <EnshrineNav onOpenSearch={handleOpenSearch} />
      <main id="store">
        <EnshrineHero onOpenCustom={handleOpenCustom} />
        <EnshrineShop
          cats={CATS}
          selectedCat={selectedCat}
          products={getFilteredProducts()}
          onSelectCat={setSelectedCat}
          onOpenCustom={handleOpenCustom}
          onViewProduct={handleViewProduct}
        />
        <EnshrineAbout onOpenCustom={handleOpenCustom} />
      </main>
      <EnshrineFooter onOpenCustom={handleOpenCustom} />
      
      <EnshrineModals
        showCustomModal={showCustomModal}
        customTitle={customTitle}
        onCloseCustomModal={handleCloseCustomModal}
        onSendCustom={handleSendCustom}
        showProductModal={showProductModal}
        selectedProduct={selectedProduct}
        onCloseProductModal={handleCloseProductModal}
        onProductToCustom={handleProductToCustom}
        showSearchModal={showSearchModal}
        searchQuery={searchQuery}
        searchResults={getSearchResults()}
        onCloseSearchModal={handleCloseSearchModal}
        onSearch={handleDoSearch}
        onViewProduct={handleViewProduct}
      />
      
      {toast && <div id="toast">{toast}</div>}
    </div>
  )
}

export default EnshrineApp
