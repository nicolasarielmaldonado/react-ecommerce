import React from 'react';

import './card.css';

export const Card = ( {category, description, image, price, title} ) => {
    return (
        <>
            <div className="card">

                <div className="product-img-wrapper">

                    <img className="product-img" alt="product" src={ image }/>
                    <div className="product-heart-container">
                        <button className="product-button-heart"><img className="product-img-heart" alt="heart" src="./darkheart.png"/></button>
                    </div>
                
                </div>

                <div className="product-wrapper">

                    <div className="product-top-bar">
                        <div className="product-stars"></div>
                    </div>

                    <p className="product-price">${ price.toFixed(2) }</p>

                    <p className="product-title">{ title }</p>
                    <p className="product-description">{ description }</p>

                    <button className="product-button-buy">Buy</button>

                </div>

            </div>
        </>
    )
}
