import { useCallback, useEffect, useState } from 'react';

export const useSearchItems = ( inputText , dataFull ) => {

    const [ searchedData, setSearchedData ] = useState([]);
    const response = dataFull;
    
    const callBack = useCallback(() => {
        setSearchedData(
            response.filter(( item ) => {
                const regex = new RegExp(`${ inputText }`.toLowerCase());  
                return item.title.toLowerCase().match( regex );
              })
        )
    },[ inputText, response ]);

    useEffect(() => {
        callBack();
    },[callBack]);

    return searchedData;
}
