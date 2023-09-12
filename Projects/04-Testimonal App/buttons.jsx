import React from 'react';
import './style.css';

export default function Buttons({text="click", btnClass, icon, onClick}) {
  return (
    <button className={`btn ${btnClass} m-1`} onClick={onClick} >
      {icon}
      {text}</button>
  )
}
