import React from 'react';

export const EmptyFavorites = () => {
    return (
        <>
          <div className="container-error">
            <p className="titulo">Your Favorites are empty!</p>
            <ul className="list-group">
              <li className="list-item"><strong>Use the heart button over each product to add it to your favorites</strong>
              </li>
            </ul>
          </div>  
        </>
    )
}