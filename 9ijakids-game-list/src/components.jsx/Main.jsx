import React, { useEffect, useState } from 'react'
import Card from './Card'


const Main = ({ Data }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(Data)
    }, [Data])

    const Cards = data.map((items, index) => {
        return <Card
            key={index}
            image={items.GameImage}
            title={items.GameTitle}
            description={items.GameDescription}
            topic={items.Topic}
        />
    })
    return (
        <div className='Main'>
            {Cards}
        </div>
    )
}

export default Main