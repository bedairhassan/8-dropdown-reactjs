import React from 'react';
import './App.css';

export const DropDown =({data,greet}) => {

    const listItems = data.map((number) => <option>{number}</option>);

    return (
      <select onChange={(event)=>{greet(event.target.value)}}>{listItems}</select>
      // <select>{listItems}</select>
    );
  }
  