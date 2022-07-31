import { useState } from 'react'
import photoGrid from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <section className='Hero'>
            <img src={photoGrid} className="hero--photo-grid" alt="Photo Grid" />
            <div className="hero--intro">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>

    )

}