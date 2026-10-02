import React, { useState, useEffect } from 'react'
import FizzNav from './FizzNav'
import FizzHero from './FizzHero'
import FizzProducts from './FizzProducts'
import FizzMoods from './FizzMoods'
import FizzCustom from './FizzCustom'
import FizzStory from './FizzStory'
import FizzFooter from './FizzFooter'
import './FizzApp.css'

const DATA = {
  female: {
    mode: "HER",
    eyebrow: "made for her vibe ✦",
    title: "cute.<br>clever.<br>personal.",
    text: "Aesthetic little things with big personality — tiny tech, dreamy lights, custom objects and gifts made to feel like they were made just for you.",
    button: "Shop her picks ↗",
    float: ["♡ pretty things", "tiny tech ✦", "made personal"],
    shopTitle: "things you'll want.",
    shopText: "Not another boring gift shop. Discover playful objects somewhere between décor, technology and personality.",
    moods: [
      ["soft mode ♡", "Pastel, dreamy and playful pieces for desks, bedrooms, shelves and the people you love."],
      ["after dark ✦", "Pastel blue tones, clean forms and little pieces of technology for gaming setups, workspaces and late-night energy."]
    ],
    customTitle: "Your photo.<br>Your name.<br>Your thing.",
    customText: "Send us an idea and we'll turn it into an aesthetic object — 3D printed, lit up, animated or completely custom.",
    storyTitle: "objects with personality.",
    storyText: "We mix design, 3D printing and electronics to make small-batch objects that feel less like products and more like little pieces of you.",
    products: [
      ["Mascot Glow Lamp", "Your FIZZ mascot turned into a soft ambient desk light.", "₹899", "🌸"],
      ["Mini Mood Bot", "A pocket-sized desk companion with an expressive face.", "₹1,499", "🤖"],
      ["Memory Light", "Turn a favourite photo into a warm keepsake.", "₹1,299", "♡"],
      ["OLED Name Tag", "Your name, animation and vibe on a tiny screen.", "₹499", "✦"]
    ]
  },
  male: {
    mode: "HIM",
    eyebrow: "built for his vibe ✦",
    title: "bold.<br>smart.<br>different.",
    text: "Pastel blue, clean and a little nerdy — desk tech, OLED objects, mini robots, ambient lights and custom pieces made for his setup.",
    button: "Shop his picks ↗",
    float: ["⚡ desk energy", "OLED mode", "built different"],
    shopTitle: "his kind of cool.",
    shopText: "Functional enough for the desk. Weird enough to be interesting. Everything sits between tech, décor and collectible.",
    moods: [
      ["setup mode ⚡", "Clean pastel blue objects for gaming desks, workspaces and anyone who likes their tech to look as good as it works."],
      ["late night ✦", "OLED faces, ambient lights, mini robots and little pieces of tech made for after-dark energy."]
    ],
    customTitle: "Your idea.<br>Your setup.<br>Your object.",
    customText: "Give us the concept. We'll turn it into a custom piece using 3D printing, electronics, lighting and personality.",
    storyTitle: "tiny tech. big personality.",
    storyText: "We mix industrial design, electronics and 3D printing to create small-batch objects for desks, rooms, creators and collectors.",
    products: [
      ["Mascot Desk Buddy", "A tiny FIZZ mascot companion for your desk, shelf or setup.", "₹1,299", "▣"],
      ["Mini Bot", "A compact expressive robot built to live beside your screen.", "₹1,799", "🤖"],
      ["Night Mode Lamp", "Minimal ambient light for late-night desks and rooms.", "₹999", "◐"],
      ["Digital Identity Tag", "Animated name, logo or message on a tiny OLED screen.", "₹599", "⌁"]
    ]
  }
}

function FizzApp() {
  const [current, setCurrent] = useState('female')

  const toggleTheme = () => {
    setCurrent(prev => prev === 'female' ? 'male' : 'female')
  }

  const data = DATA[current]

  return (
    <div className={`fizz-app ${current === 'male' ? 'male' : ''}`}>
      <FizzNav data={data} onToggleTheme={toggleTheme} />
      <main>
        <FizzHero data={data} />
        <FizzProducts data={data} />
        <FizzMoods data={data} />
        <FizzCustom data={data} />
        <FizzStory data={data} />
      </main>
      <FizzFooter />
    </div>
  )
}

export default FizzApp
