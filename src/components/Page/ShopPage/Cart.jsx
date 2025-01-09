import React, {useState} from 'react';
import './styles/shopPage.css';

const Cart = ({onClickCart, cont}) => {





  return (
    <div onClick={onClickCart} className='cartsBlocks'>
         <div className='blockCount'>
            <span  className='countercart'>{cont}</span>
          </div>
<svg id='cart' width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><line x1="32" y1="48" x2="32" y2="32"/><line x1="44" y1="48" x2="44" y2="32"/><line x1="20" y1="48" x2="20" y2="32"/><polygon points="8 24 12 56 52 56 56 24 8 24"/><line x1="16" y1="24" x2="20" y2="8"/><line x1="48" y1="24" x2="44" y2="8"/></svg>
    </div>
  )
}

export default Cart;