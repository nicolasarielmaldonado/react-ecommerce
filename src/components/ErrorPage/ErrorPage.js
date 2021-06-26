import React from 'react';
import './errorPage.css';

export const ErrorPage = () => {
    return (
        <>
          <div className="container-error">
            <p className="titulo">There are no publications that match your search.</p>
            <ul className="list-group">
              <li className="list-item"><strong>Check your spelling</strong></li>
              <li className="list-item">Use more generic terms or less words</li>
              <li className="list-item">Search through the categories to find a similar product</li>
            </ul>
          </div>  
        </>
    )
}