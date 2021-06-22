import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";


import './search.css'

export const Search = ( { handleSetInputText } ) => {
  
  const [input, setInput] = useState("");
  const inputRef = useRef(null)

  const HandleChange = (e) =>{
    setInput(e.target.value);
  }

  const HandleSubmit = (e) =>{
    handleSetInputText(input);

    setInput("");
  }

  const checkEnter = (e) => {
    if ( e.code === "Enter" ){
        inputRef.current.click();
    }
  }
  
    return (
        <>
            <div className="form">
                <input value={input} onKeyDown={e => checkEnter(e)} onChange={ HandleChange } type="text" className="search" placeholder="Search..."></input>
                <Link id="Link" to={`/search/${input}`}>
                    <button ref={inputRef} onClick={ HandleSubmit } className="search-button"><img alt="search-svg" className="lupa" src="./lupa.svg"/></button>
                </Link>
            </div>
        </>
    )
}