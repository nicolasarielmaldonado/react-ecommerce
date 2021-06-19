import React, { useContext, useState } from 'react'
import { ItemsContext } from '../../App';
import { useFilterItems } from '../../hooks/useFilterItems';
import './search.css'

export const Search = () => {

  const response = useContext( ItemsContext );
  
  const [inputText, setInputText] = useState("");

  const HandleChange = (e) =>{
    setInputText(e.target.value);
    console.log(e.target.value);
  }

  
  const HandleSubmit = (e) =>{
    e.preventDefault();
    const searchedData = response.filter((item) => {
      const regex = new RegExp(`${inputText}`.toLowerCase());

      return item.title.toLowerCase().match(regex);
    })
    console.log(searchedData);
    setInputText("");
  }

    return (
        <form className="form" onSubmit={ HandleSubmit }>
          <input value={inputText} onChange={ HandleChange } type="text" className="search" placeholder="Search..."></input>
          <button type="submit" className="search-button"><img alt="search-svg" className="lupa" src="./lupa.svg"/></button>
        </form>
    )
}