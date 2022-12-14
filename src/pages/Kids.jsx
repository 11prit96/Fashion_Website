import React from 'react';
import Select from "../components/sub/Select";
import "./Kids.css";
import KidsTees from "../constants/KidsTees";

const Kids = () => {
  return (
    <div className='kidsSection'>
      <Select/>
      <KidsTees/>
    </div>
  )
}

export default Kids
