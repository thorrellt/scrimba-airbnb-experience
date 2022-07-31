import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
        
    </div>
  )
}

export default App
