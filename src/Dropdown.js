import React from 'react';
import './App.css';

export const DropDown =({data,greet,codeDisplay}) => {

    const listItems = data.map((number) => <option key={number.item}>{number.item}</option>);

    return (
      <div>
        <select onChange={(event)=>{greet(event.target.value)}}>{listItems}</select>
        {codeDisplay}
      </div>
      // <select>{listItems}</select>
    );
  }
  