import { useState } from 'react'
import cardPhoto from '../assets/katie-zaferes.png'
import star from '../assets/star.png'


export default function Card(props) {
    const assetPath = "../public/assets/";
    const {
        photo, 
        rating, 
        reviewCount, 
        country,
        title,
        price 
    } = props;
    console.log(props);

    return (
        <div className="Card">
            <img src={assetPath + props.img} className="card--photo" alt="Card Photo">
            </img>

            <div className="card--stats">
                <img src={star} />
                <span>{rating}</span>
                <span className='gray'>({reviewCount}) • </span>
                <span className='gray'>{country}</span>
            </div>

            <p>{title}</p>
            <p><span className='bold'>From ${price}</span> / person</p>
        </div>
    )
}