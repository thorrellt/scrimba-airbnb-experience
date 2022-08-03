import { useState } from 'react'
import cardPhoto from '../assets/katie-zaferes.png'
import star from '../assets/star.png'


export default function Card(props) {
    const assetPath = "../public/assets/";
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={assetPath + props.coverImg} className="card--image" alt="Card Photo">
            </img>

            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>

            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span>  / person</p>
        </div>
    )
}