import React from 'react';
import './ErrorPage.css';

export const ErrorPage = () => {
    return (
        <>
          <div className="container-error">
            <p className="titulo">No hay publicaciones que coincidan con tu búsqueda.</p>
            <ul className="list-group">
              <li className="list-item"><strong>Revisá la ortografía</strong> de la palabra.</li>
              <li className="list-item">Utilizá palabras más genéricas o menos palabras.</li>
              <li className="list-item">Navegá por las categorías para encontrar un producto similar</li>
            </ul>
          </div>  
        </>
    )
}
