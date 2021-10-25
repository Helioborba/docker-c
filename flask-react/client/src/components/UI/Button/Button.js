import React from 'react';

import style from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${style.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      ref={props.ref}
    >
      {props.children}
    </button>
  );
};

export default Button;
