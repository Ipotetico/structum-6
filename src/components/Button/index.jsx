import React, { useState } from 'react';
import './button.scss';

const Button = ({ title, setPage, page }) => {
  const [change, setChange] = useState(false);

  return (
    <>
      <div
        onClick={() => setPage(page)}
        onMouseEnter={() => setChange(true)}
        onMouseLeave={() => setChange(false)}
        className={change ? 'button change' : 'button'}>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Button;
