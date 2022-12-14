import React from 'react';
import "./MenShirts.css";
import menShirt1 from "../assets/menShirt1.jpeg";
import menShirt2 from "../assets/menShirt2.jpg";
import menShirt3 from "../assets/menShirt3.jpeg";
import menShirt4 from "../assets/menShirt4.jpg";
import menShirt5 from "../assets/menShirt5.jpg";
import menShirt6 from "../assets/menShirt6.jpg";


const MenShirts = () => {
  return (
    <div className='grid_container1'>
        <div className='item1'><img src={menShirt1} alt="shirt1"/></div>
        <div className='item1'><img src={menShirt2} alt="shirt2"/></div>
        <div className='item1'><img src={menShirt3} alt="shirt3"/></div>
        <div className='item1'><img src={menShirt4} alt="shirt4"/></div>
        <div className='item1'><img src={menShirt5} alt="shirt5"/></div>
        <div className='item1'><img src={menShirt6} alt="shirt6"/></div>
    </div>
  )
}

export default MenShirts