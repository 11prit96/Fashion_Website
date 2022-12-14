import React from 'react';
import headerLogo from "../assets/header.png";
import "./Header.css";

const Header = () => {
    return (
        <div className='app_header'>
            <img src={headerLogo} alt='headerLogo' />
            <h3>
                You can have anything you want in life if you dress for it.<br/>~ Edith Head
            </h3>
        </div>
    )
}

export default Header