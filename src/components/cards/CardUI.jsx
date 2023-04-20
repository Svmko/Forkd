import React from 'react';
import './CardStyle.css'

const Card = props => {
    return (
        <div className='cardy text-center'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='Image 1' className='card-img-top'></img>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    {props.caption}
                </p>
            </div>
        </div>
    )
}

export default Card;
