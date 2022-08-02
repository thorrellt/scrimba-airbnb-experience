import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import katiePhoto from './assets/katie-zaferes.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
      img = "katie-zaferes.png"
      rating ="5.0"
      reviewCount = {6}
      country = "USA"
      title = "Life Lessons with Katie Zaferes"
      price =  {136} />
        
    </div>
  )
}

export default App
