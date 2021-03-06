import React from 'react'

const DisplayData = ({isLoaded, items}) => {
    return (
        <section className='data'>
            {!isLoaded ? (
                <h1 className='message'>Please search a Pokemon!</h1>
            ) : (
                <div className='grid'>
                <h2 className='name'>{items.name}</h2>
                <div className='info'>
                <div className='row'>
                    <img src={items.imgFront} alt=""/>
                    <img src={items.imgShinyF} alt=""/>                   
                </div>
                <div className='row'>
                    <img src={items.imgBack} alt=""/>
                    <img src={items.imgShinyB} alt=""/>
                </div>
                </div>
                </div>
            )}
        </section>
    )
}

export default DisplayData
