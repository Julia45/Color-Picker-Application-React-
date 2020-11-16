import React from 'react'
import './Button.css';

export function Button(props) {

  return (
    <button className={props.className} onClick={props.onClick} >{props.name} </button>
  );
}

