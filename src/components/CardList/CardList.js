import React, { useEffect } from 'react';
import { useFilterItems } from '../../hooks/useFilterItems';
import { Card } from '../Card/Card';


import './cardList.css'

export const CardList = ({ category = "", searchData = [] }) => {
    
    const { data, loading } = useFilterItems( category );
    let searchedData = searchData;

    return ( 
        <>
            { loading && <p className="Loading">Loading...</p> }
            <div className="card-list">
                {
                    (searchedData.length>=1) ? searchedData.map( item => {
                        return (
                            <Card key={ item.id }{ ...item }/>
                        )
                    }) :
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