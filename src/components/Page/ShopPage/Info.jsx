import React from 'react';
import './CartView/styles/cartview.css';

const Info = ({title, image}) => {
  return (

         <div className='nonecart'>
                <div className='imgSmile'>
                    <img className='smile' src={image} alt="smile"/>
                </div>
                <div className='txtNone'>
                    <span className='nonetxt'>{title}</span>
                </div>
            </div>

  )
}

export default Info;