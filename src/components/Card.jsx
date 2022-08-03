import { useState } from 'react'
import cardPhoto from '../assets/katie-zaferes.png'
import star from '../assets/star.png'


export default function Card(props) {
    const assetPath = "../public/assets/";
    const {
        photo, 
        rating, 
        reviewCount, 
        country: location,
        title,
        price 
    } = props;

    return (
        <div className="Card">
            <img src={assetPath + props.img} className="card--image" alt="Card Photo">
            </img>

            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{rating}</span>
                <span className='gray'>({reviewCount}) • </span>
                <span className='gray'>{location}</span>
            </div>

            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span>  / person</p>
        </div>
    )
}