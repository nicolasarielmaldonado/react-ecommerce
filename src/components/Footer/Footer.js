import React from 'react'
import './footer.css'


export const Footer = () => {
    return (
        <footer className="footer">
            <p className="madeby"><code>Made By:</code></p>
            <div className="link-container">
                <img className="github-icon" alt="github-icon" src="./githubicon.png"/>
                <a className="github-link" href="https://github.com/YoelChrestia" target="_blank" rel="noopener noreferrer">YoelChrestia</a>    
            </div>
            
            <div className="link-container">
                <img className="github-icon" alt="github-icon" src="./githubicon.png"/>
                <a className="github-link" href="https://github.com/nicolasarielmaldonado" target="_blank" rel="noopener noreferrer">nicolasarielmaldonado</a>
            </div>
        </footer>
    )
}
