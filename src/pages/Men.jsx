import React from 'react';
import "./Men.css";
import MenShirts from '../constants/MenShirts';
import Select from '../components/sub/Select';

const Men = () => {
  return (
    <div className='mens_section'>
      <Select/>
      <MenShirts />
    </div>
  )
}

export default Men;