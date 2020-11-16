import React from 'react'
import './Rect.css';

export function Rect ({ r, g, b }) {
  return (
    <div className="rect" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}/>
  );
}

