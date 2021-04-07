import React from 'react';
import './Buttons.css';

const button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      data-label={props.label}
      data-value={props.value}
      data-size={props.size}
      id={props.label}
      className='Button'
    >
      {props.value}
    </button>
  );
};

export default button;
