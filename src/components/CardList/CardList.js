import React from 'react';
import { useFilterItems } from '../../hooks/useFilterItems';
import { Card } from '../Card/Card';

import './cardList.css'

export const CardList = ({ category = "" }) => {

    const { data, loading } = useFilterItems( category );

    return ( 
        <>
            { loading && <p className="Loading">Loading...</p> }
            <div className="card-list">
                {
                    data.map( item => {
                        return (
                            <Card key={ item.id }{ ...item }/>
                        )
                    })   
                }
            </div>
        </>
    )
}
