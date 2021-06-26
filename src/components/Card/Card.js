import React, { useContext } from 'react';
import { FavoriteContext, ItemCartContext } from '../../App';
import './card.css';

export const Card = ( { description, image, price, title, id } ) => {

    const {favoriteItems, updateFavoriteItems} = useContext(FavoriteContext)
    const {updateCartItems} = useContext(ItemCartContext)

    const heart = favoriteItems.includes(id) ? "brownheart" : "emptybrownheart";

    const titleSlice = () => {
        if (title.length > 50){
            return title.slice(0, 50) + "...";
        }
        return title;
    }

    const descriptionSlice = () => {
        if (description.length > 150){
            return description.slice(0, 150) + "...";
        }
        return description;
    }

    const handleFav = () => {
        updateFavoriteItems(id);
    }

    const handleBuy = () => {
        updateCartItems({
            id: id,
            price: price,
            title: title
        });
    }

    return (
            <div className="card">
                <div className="product-img-wrapper">
                    <img className="product-img" alt="product" src={ image }/>
                    <div className="product-heart-container">
                        <button onClick={handleFav} className="product-button-heart"><img className="product-img-heart" alt="heart" src={`././${heart}.png`}/></button>
                    </div>               
                </div>

                <div className="product-wrapper">
                    <h3 className="product-title">{ titleSlice() }</h3>
                    <p className="product-description">{ descriptionSlice() }</p>
                    <div className="product-price-container">
                        <p className="product-price">${ price.toFixed(2) }</p>
                        <button onClick={handleBuy} className="product-button-buy">Buy</button>
                    </div>
                </div>
            </div>
    )
}