import React, { useState } from 'react';
import './trending.css';

export const Trending = () => {

    const [slider, setSlider] = useState(1);

    const rotacion = () => {

        if(slider === 1){
            document.getElementById("firstimg").classList.add("none");
            document.getElementById("secondimg").classList.remove("none");
            setSlider(2);
        }else if(slider === 2){
            document.getElementById("secondimg").classList.add("none");
            document.getElementById("thirdimg").classList.remove("none");
            setSlider(3);
        }else{
            document.getElementById("thirdimg").classList.add("none");
            document.getElementById("firstimg").classList.remove("none");
            setSlider(1);
        }    
    }

    setTimeout(() => {
        rotacion();
    }, 3000);

    return (
        <div className="trending">
            <div id="firstimg" className="trending-image firstimg" alt="trending"/>
            <div id="secondimg" className="trending-image none secondimg" alt="trending"/>
            <div id="thirdimg" className="trending-image none thirdimg" alt="trending"/>
        </div>
    )
}