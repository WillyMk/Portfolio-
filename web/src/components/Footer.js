import React from 'react'
import {FaTwitter, FaGithub} from "react-icons/fa";
import './Footer.css';

const Footer =()=> {
    return (
        <div className="footer">
        <div className="overlay">
            <h1>Willy|Dev</h1>
            <footer>&copy; Copyright 2021 All rights Reserved</footer>
            <ul>
                <li>
                    <a href="https://twitter.com/willy_youngDev" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                </li>
                <li><a href="https://github.com/WillyMk" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer;
