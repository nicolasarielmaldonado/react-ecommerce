import React, { useContext, useEffect, useState } from 'react';
import { ItemCartContext } from '../../App';
import './modal.css';

export const Modal = ({ itemsCart, funcToggleCart } ) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const {handleRemove, handleBuyAll} = useContext(ItemCartContext);

    useEffect(()=> {
        let accum = 0;
        itemsCart.forEach(( item )=> {
            accum = accum + ( item.quantity * item.price );
        })
        setTotalPrice(accum.toFixed(2));
    },[ itemsCart ]);


    const titleSlice = ( title ) => {
        if ( title.length > 30 ){
            return title.slice(0, 30) + "...";
        }
        return title;
    } 

    return (
        <div className="modal">
            <div className="modal-container">
                <img src="./cerrar.png" alt="cross" className="close-modal" onClick={ funcToggleCart }/>
                <div className="modal-header">
                    <p className="title-item">Product:</p>
                    <p className="price-item">Price:</p>
                    <p className="quantity-item">Quantity:</p>
                </div>
                {
                    itemsCart.map(item => {
                        return (
                            <div key={ item.id } className="modal-item">
                                <p className="title-item">{titleSlice( item.title )}</p>
                                <p className="price-item">${ item.price.toFixed(2) }</p>
                                <p className="quantity-item">{ item.quantity }</p>
                                <button className="remove-button" onClick={() => handleRemove( item.id )}>X</button>
                            </div> 
                        )
                    })
                }
                
                <div className="total-container">
                    <p className="total-price">{ (totalPrice > 0)? `Total: $${totalPrice}`: "" }</p>
                    <button onClick={() => handleBuyAll()} className="button-buy-all">CheckOut</button>
                </div>

            </div>
        </div>
    )
}