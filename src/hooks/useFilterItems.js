import {useContext, useEffect, useState} from 'react'
import { ItemsContext } from '../App';



export const useFilterItems = (category) => {

    const response = useContext( ItemsContext );

    const [items, setItems] = useState({  
        data: [],
        loading: true
    });
    
    useEffect(() => {
        if (category === ""){
            setItems({
                data: response,
                loading: false
            });
        } else {
            let filteredData;
            filteredData = response.filter(item => {
                return (item.category === category);
            })
            setItems({
                data: filteredData,
                loading: false
            })
        }
        
    }, [category, response])


    return items;
}
