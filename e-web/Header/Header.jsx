import React, { useState } from 'react'
import "../web.css"
import Colors from '../sildebar/Color'
import { useTheme } from './ThemeContext'
const Header = () => {

  const{theme,toggleTheme} = useTheme();
  return (
    <div className='head'>
      <input type="text " placeholder='Enter your search shoes' />
      <div className="logo">
        <p>heart</p>
        <p>count</p>
       <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Header