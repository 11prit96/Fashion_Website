import React from 'react';
import "./Select.css";
import { BsFilterRight, BsSortDownAlt } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { IoResizeOutline } from "react-icons/io5";

const Select = () => {
  return (
    <ul className='select'>
        <li>Sort<BsSortDownAlt className='icons'/></li>
        <li>Category<BiCategoryAlt className='icons'/></li>
        <li>Size<IoResizeOutline className='icons'/></li>
        <li>Filter<BsFilterRight className='icons'/></li>
      </ul>
  )
}

export default Select