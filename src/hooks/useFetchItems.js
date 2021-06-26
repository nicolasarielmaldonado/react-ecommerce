import { useCallback, useEffect, useState } from 'react';
import { itemRequest } from '../services/itemRequest';

export const useFetchItems = () => {
    const [ dataFull, setDataFull ] = useState([]);

    const fetch = useCallback(() => {
        itemRequest()
        .then( items => {
             setDataFull( items ); 
        });
    },[ setDataFull ]);

    useEffect(() => {
        fetch();
    },[ fetch ]);

    return dataFull;
}