import React, { useState } from 'react';
import classname from 'classnames';

import './styles/cartview.css';


const CartView = ({onCloseCart, items=[], onRemove}) => {
const [overflow, setOverflow] = useState(null)
  return (

 <div className='cartView'>
      <div className='cartInfo'> 
      <div className={classname('itemsCart', true ? "active" : '')}> 
       {items.length > 0 ? items.map((obj) =><div className='blockCartPrice'>
        <div className='imgCart'>
            <img className='imgcartPrice' src={obj.image}/>
        </div>
        <div className='descCart'>
            <p className='desctitle'>{obj.title}</p>
            <p className='descSubtittle'>{obj.desc}</p>
        </div>
        <div className='cartBlockAdd'>
            <div className='blockAdd'> 
            <span className='currency'>{obj.currency}</span>
            <span className='price'>{obj.price}</span>
            </div>
            <div className='blockBtnAdd'>
    <button onClick={() =>onRemove(obj.id)} className='btnAdd'>
        <img className='imgcheck _btn' src='./img/svg/close.svg' alt="button"/>
    </button>
</div>
        </div>        
    </div>) :  <div className='nonecart'>
                <div className='imgSmile'>
                    <img className='smile' src='./img/smile.png' alt="smile"/>
                </div>
                <div className='txtNone'>
                    <span className='nonetxt'>your cart is empty:(</span>
                </div>
            </div>}
            </div>

           
        <div className='purchases'><p className='p1'>Your purchases:</p></div>
        <div onClick={onCloseCart} className='cancel'><img className='isClose' src='./img/svg/close.svg' alt="close"></img></div>
        <div className='buysell'>
            <span className='sumsell'>amount to be paid: </span>
        <div className='sum'><p className='currency'>$<span className='sum'> 2001</span></p></div>
        <div className='submitSell'><button className='sell'>BUY</button></div></div>
        </div>
    </div>

  )
}

export default CartView;