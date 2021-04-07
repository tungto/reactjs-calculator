import React from 'react';
import './Display.css';

const display = (props) => {
  return (
    <span value={props.value} id='display'>
      {props.value}
    </span>
  );
};

export default display;
