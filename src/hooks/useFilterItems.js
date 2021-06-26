import {useContext, useEffect, useState} from 'react'
import { FavoriteContext, ItemsContext } from '../App';

export const useFilterItems = ( category ) => {

    const response = useContext( ItemsContext );
    const { favoriteItems } = useContext( FavoriteContext );

    const [ items, setItems ] = useState({  
        data: [],
        loading: true
    });
    
    useEffect(() => {
        if ( category === "" ){
            setItems({
                data: response,
                loading: false
            });
        } else if ( category === "favorites" ){
            let filteredData = response.filter( ( item )=>{
                let auxFavItem;
                favoriteItems.forEach( favItem => {
                    if ( item.id === favItem  ){
                        auxFavItem = favItem ;
                    }
                });
                return item.id === auxFavItem;
            });
            setItems({
                data: filteredData,
                loading: false
            })
        } else {
             let filteredData = response.filter( item => {
                return ( item.category === category );
            })
            setItems({
                data: filteredData,
                loading: false
            })
        }
    }, [ category, response, favoriteItems ]);
    return items;
}