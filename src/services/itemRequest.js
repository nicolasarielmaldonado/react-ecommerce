import {dataFake} from './fakeData.js'; 

export const itemRequest = async() => {

    const URL = "https://fakestoreapi.com/products";

    console.log("fetch");

    const resp = await fetch ( URL );
    const data = await resp.json();

    const dataFull = ( [ ...data, ...dataFake ] );

    return dataFull;
}