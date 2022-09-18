import React from 'react'

const Card = ({ image, title, description, topic }) => {

    return (
        <div className='Card'>
            <div className='img'>
                <img src={image} alt='pic' />
            </div>
            <div className='details'>
                <h3 className='title'>{title}</h3>
                <p className='description'>{description}</p>
                <p>{topic}</p>
            </div>
        </div>
    )
}

export default Card