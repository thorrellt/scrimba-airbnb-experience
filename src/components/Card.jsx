import { useState } from 'react'
import cardPhoto from '../assets/katie-zaferes.png'
import star from '../assets/star.png'


export default function Card(props) {
    const assetPath = "../public/assets/";
    console.log(props.item)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={assetPath + props.item.coverImg} className="card--image" alt="Card Photo">
            </img>

            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>

            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span>  / person</p>
        </div>
    )
}