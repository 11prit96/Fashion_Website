import { React, useState } from 'react';
import logo from "../assets/logo.png";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='app_navbar'>
            <div className='img_container'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='navbar_links'>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/Men">Men</NavLink></li>
                <li><NavLink to="/Women">Women</NavLink></li>
                <li><NavLink to="/Kids">Kids</NavLink></li>
            </ul>
            <input className='search_bar' type="text" placeholder='Search' />
            <ul className='user_interests'>
                <li>Profile<CgProfile className='user_icons' /></li>
                <li>Wishlist<AiOutlineHeart className='user_icons' /></li>
                <li>Bag<AiOutlineShoppingCart className='user_icons' /></li>
            </ul>

            <div className='app_navbar_smallscreen'>
                <AiOutlineMenu id='burger_menu' onClick={() => setToggleMenu(true)} />

                {toggleMenu &&
                    <div className='app_navbar_smallscreen_overlay'>
                        <AiOutlineClose id='screen_close' onClick={() => setToggleMenu(false)}/>
                        <ul className='user_interests_smallscreen'>
                            <li>Profile<CgProfile className='user_icons' /></li>
                            <li>Wishlist<AiOutlineHeart className='user_icons' /></li>
                            <li>Bag<AiOutlineShoppingCart className='user_icons' /></li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;