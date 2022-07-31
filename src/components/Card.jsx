import { useState } from 'react'
import cardPhoto from '../assets/katie-zaferes.png'
import star from '../assets/star.png'


export default function Card() {
    return (
        <div className="Card">
            {/* <span className='card--status'>SOLD OUT</span> */}
            <img src={cardPhoto} className="card--photo" alt="Card Photo">
            </img>

            <div className="card--stats">
                <img src={star} />
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>

            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}