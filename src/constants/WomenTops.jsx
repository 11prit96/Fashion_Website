import React from 'react';
import "./WomenTops.css";
import womenTop1 from "../assets/womenTop1.jpg";
import womenTop2 from "../assets/womenTop2.jpg";
import womenTop3 from "../assets/womenTop3.jpg";
import womenTop4 from "../assets/womenTop4.jpg";
import womenTop5 from "../assets/womenTop5.jpg";
import womenTop6 from "../assets/womenTop6.jpg";


const WomenTops = () => {
  return (
    <div className='grid_container2'>
        <div className='item2'><img src={womenTop1} alt="top1"/></div>
        <div className='item2'><img src={womenTop2} alt="top2"/></div>
        <div className='item2'><img src={womenTop3} alt="top3"/></div>
        <div className='item2'><img src={womenTop4} alt="top4"/></div>
        <div className='item2'><img src={womenTop5} alt="top5"/></div>
        <div className='item2'><img src={womenTop6} alt="top6"/></div>
    </div>
  )
}

export default WomenTops
