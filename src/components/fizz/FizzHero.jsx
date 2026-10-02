import React from 'react'

function FizzHero({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Your custom idea has been captured. Connect this form to WhatsApp, email or your backend to receive real orders.')
  }

  return (
    <section className="hero wrap">
      <div>
        <span className="badge">{data.eyebrow}</span>
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p>{data.text}</p>
        <div className="actions">
          <a className="btn primary" href="#shop">{data.button}</a>
          <a className="btn secondary" href="#custom">Make it yours</a>
        </div>
      </div>

      <div className="heroart">
        <div className="glow"></div>
        <div className="glow2"></div>
        <img 
          className="mascotSheet" 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABgAAAAQACAYAAAAncZJCAAAQAElEQVR4AZz97aIlN45kCxrivv+DTpU+QlKq77/krGWg771PhLK6ZhgEYTAYQNLdzwllprrr2y//9V/n919/fdn33345a7/itSf+5fxOTtv8L+cPYm3j1b7z/0299gveWvPab/TRa/Jr2wPt77+cPx770v+X22f9S4/m+2/vfb7yat3nV3r+hum1Xz4w/G9wNfh64t9/O99///V8J/7ePX4Bv+19z1+Oz+CP6n7UG//yqntqHr9935rl/5vn432u/Ur9r+Daxd63sTzPD/w75nPYHuheZ7a/hq4cNfW/9Nzf2/+X853638HanktO4zy/rP2m/9SAt5586z+82l/+6/z239fAv4K13/77//Pif4f/39hv6LRf6//7/Gb/7sm96v+bb1j8mLH2GX9icx9mP+w3+r/O8+t/0fNDw319Pj7rL0bd7y9jD/FLu89wn5OYd0Gucd8D8cvzc/jlOzInR0/439B1f/x34u8vr47v9be138mtWbem9nf0v/+Q6zfzen7vu8pr3a95+nBu4+/0+GrcC257L/7OXpo/F39QJ/6Opkb8B/mXPT/v/Lz5s/+d+Dt57Xf87sn+4qcH2Lxn1KqD+7359xmsfd7Vb6977D395n0Pm6c/51L//elBrGbzW/Ng+TX2oq/YnP3E/2Svb6R667Ce+b23Pf7Zfjl7fs/xy/0uHy/nt/pf1bx0fod+z/zc+XP4u7gcvwN6BuoaU0fuy7dP/Kn3TL/xPDSfkfHvrf3vY532K7Fe+731/31+h6uW2q27Z5av/Vc138E+u9VSx/kWX/2P9c2b4xmCt3bjrXvuaB7jOe973Z+n743l/dl56tbb6w/+TvyDPTXjp+fewfNR233BnN17em+f82+/8Put9l99Nk/tvpdnj8/ziZd/94fz9zzn/LHes//BN/rVOA9af360P/kZWvv1/Pld++38yc/X2i/93f8H/TX7+TP3B/ntufny9Pynn68/4Nd+vb1+4e+Qr/bkP/vYyz018f8v1mfDvt+5+3f8H9zxD878/cbrf+3ft7v3L+ePavS/Xvx4uf+t/Xqf3W/0sF77BfxpHxzn+aNG3nP+j0ZdtfpH/4Gf8/+oefFPzS/c+9drYo1vk3f8nf3XNr9n+/U83/b+rkLv9/7ahzx1f2jlfzmL3/z2ZA9+DvxGtw/fLfEb/8J3sZz7aV9zv2xf9vXnbE09fPd99lu/+V9ePe3Vb+m1p7nH7IPx86nuXfvk1/9OXvPn93d+V2rf+f1lzR/0bX+ew4/1fR6c+w/t+edFvsf95n79x29mf85+OX+g2+f3C++MZ8h7+l1jP38m3HPtl/MHe3+1/4b72azTts78j7U+Qw3++X44x9P7Oc8fr9wv3OGxX8G/su8v1979+zuFZ/Dny345f3LmP+nzJ/3/rIcr/vX8ybP684V/Oc9+72eD9jv2qhP/St2vaL/+HvsTzVP/5+35F/3/uvjP5rf2T/jH/vr+2/nr+b1Yb291v3SfPy/3J7qn5vF/wf1F/rE/wdof9b/1921zH2f4U9znQ17sWX7UN/6152o98V9f9vqN3GO/f+Bfu+ef6PcMG2+PR6+3RhP/Ro3267HmD/bRekfwX5/2x2/nL+zPcu/6v7iDOvk/yf/1BznsX9ee2Pyj++s7mltXbNy+7PEP/k/yL6Ou53uenzE1f34x7t68/jfeJdYe+muvvJpPI0/Pv+jn3XYvON7bHz/W8Ky/7ouOunIvLdyDP/Rf+7u/ut9O+afHo+9zJccz/Yt7rBGj+6s5nie5f/3x/fjc/wLXzNd+ffX9q/pbS/+/fv+V5/Nr7Q/+s8Mf3H3vvNyfPftv/MzxjVxs/ssZXnv8+t7H3tjW/0r/XzD9s/fvxL9hv757o/cZa+86auj/J7lP83t9" 
          alt="FIZZ mascot"
        />
        <div className="float f1">{data.float[0]}</div>
        <div className="float f2">{data.float[1]}</div>
        <div className="float f3">{data.float[2]}</div>
      </div>
    </section>
  )
}

export default FizzHero
