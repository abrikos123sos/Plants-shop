import React from 'react';
import './styles/styles.css';

const ButtonSvg = () => {
  return (
    <div>
        <button className='viewBtn'>
            <img className='rightarrow' src={'./img/svg/rightarrow.svg'}/>
        </button>
    </div>
  )
}

export default ButtonSvg;