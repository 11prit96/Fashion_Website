import React from 'react';
import Select from '../components/sub/Select';
import "./Women.css";
import WomenTops from '../constants/WomenTops';

const Women = () => {
  return (
    <div className='womenSection'>
      <Select/>
      <WomenTops/>
    </div>
  )
}

export default Women
