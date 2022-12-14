import React from 'react';
import "./KidsTees.css";
import KidsTees1 from "../assets/kidsTees1.jpg";
import KidsTees2 from "../assets/kidsTees2.jpg";
import KidsTees3 from "../assets/kidsTees3.jpg";
import KidsTees4 from "../assets/kidsTees4.jpg";
import KidsTees5 from "../assets/kidsTees5.jpg";
import KidsTees6 from "../assets/kidsTees6.jpg";

const KidsTees = () => {
  return (
    <div className='grid_container3'>
        <div className='item3'><img src={KidsTees1} alt="tees1"/></div>
        <div className='item3'><img src={KidsTees2} alt="tees2"/></div>
        <div className='item3'><img src={KidsTees3} alt="tees3"/></div>
        <div className='item3'><img src={KidsTees4} alt="tees4"/></div>
        <div className='item3'><img src={KidsTees5} alt="tees5"/></div>
        <div className='item3'><img src={KidsTees6} alt="tees6"/></div>
    </div>
  )
}

export default KidsTees
