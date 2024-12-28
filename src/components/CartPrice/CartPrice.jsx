import React, { useState } from 'react';
import './styles/cartsPrice.css';

const CartPrice = ({image,title,desc,check,uncheck,currency,price,onPlus}) => {





const [active, setActive] = useState();

const handleAddBtn = () =>{
    setActive(!active)
onPlus({image,title,desc,check,uncheck,currency,price})
}


  return (
    <div className='blockCartPrice'>
        <div className='imgCart'>
            <img className='imgcartPrice' src={image}/>
        </div>
        <div className='descCart'>
            <p className='desctitle'>{title}</p>
            <p className='descSubtittle'>{desc}</p>
        </div>
        <div className='cartBlockAdd'>
            <div className='blockAdd'>
            <span className='currency'>{currency}</span>
            <span className='price'>{price}</span>
            </div>
            <div className='blockBtnAdd'>
                <button onClick={handleAddBtn} className='btnAdd'>
                   {active ? <img className='imgcheck _btn' src={check} alt="button"/> :
                    <img className='imguncheck _btn' src={uncheck} alt="button"/>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartPrice