import React from 'react'

const DisplayData = ({isLoaded, items}) => {
    return (
        <section className='data'>
            {!isLoaded ? (
                <div className='message-cont'>
                <h1 className='message'>Please search a Pokemon!</h1>
                <p>...with the name or the id from 1 to 898</p>
                </div>
            ) : (
                <div className='grid'>
                <h2 className='name'>{items.name}</h2>
                <div className='pictures'>
                <div className='row'>
                    <img src={items.imgFront} alt=""/>
                    <img src={items.imgShinyF} alt=""/>                   
                </div>
                <div className='row'>
                    <img src={items.imgBack} alt=""/>
                    <img src={items.imgShinyB} alt=""/>
                </div>
                </div>
                <div className='description'>
                    <h3 className='type'>Type: {items.primarytype}</h3>
                    <h4 className='stats'>Height: {items.height}</h4>
                    <h4 className='stats'>Weight: {items.weight}</h4>
                    <h4 className='stats'>HP: {items.hp}</h4>
                    <h4 className='stats'>Base Ability:</h4>
                    <span>{items.baseAbility1}</span>
                </div>
                </div>
            )}
        </section>
    )
}

export default DisplayData
