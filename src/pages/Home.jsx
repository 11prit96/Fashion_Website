import React from 'react';
import Header from '../components/Header';
import saleOn from "../assets/saleOn.png";
import saleOffer from "../assets/saleOffer.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className='app_home'>
        <Header/>
        <img className='sale_clothes1' src={saleOn} alt="saleOnclothes1"/>
        <img className='sale_clothes2' src={saleOffer} alt="saleOnclothes2"/>
    </div>
  )
}

export default Home