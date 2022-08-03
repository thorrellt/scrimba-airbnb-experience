import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import katiePhoto from './assets/katie-zaferes.png'
import './App.css'
import cardData from './data/cardData.js'

function App() {
  // console.log(cardData)
  const cards = cardData.map(card => {
    return <Card 
    key ={card.id}
    {...card} />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section> 
        
    </div>
  )
}

export default App
