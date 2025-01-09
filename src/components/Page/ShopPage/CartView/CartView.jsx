import React, { useContext, useState } from 'react';
import classname from 'classnames';

import './styles/cartview.css';
import AppContext from '../context';
import Info from '../Info';
import axios from 'axios';



const CartView = ({ onRemove ,totalPrice}) => {


    const delay = (ms) => new Promise ((resolve) => setTimeout(resolve, ms))

const {cartItems, setCartOpened, setCartItems, setCounter} = useContext(AppContext)
const [isOrderComplete, setIsOrderComplete] = useState(false)
const [orderId, setOrderId] = useState(null)

const onClickOrder = async () =>{
try {
   const {data} = await axios.post('http://localhost:3003/orders', {items:cartItems});
    setOrderId(data.id)
    setIsOrderComplete(true);
    setCartItems([])
    setCounter()
   for (let i = 0; i < cartItems.length; i++) {
    const items = cartItems[i];
    await axios.delete("https://677553af92222241481b2ef4.mockapi.io/Drawer/" + items.id)
   delay(1000)
}

} catch (error) {
    alert('Failed to create order:(');
    console.log(error)
}
}

const sortRef = React.useRef()



  return (

 <div ref={sortRef}  className='cartView'>
      <div className='cartInfo'> 
      <div className={classname('itemsCart', true ? "active" : 'disable')}> 
       {cartItems.length > 0 ? cartItems.map((obj, id) =><div key={id} className='blockCartPrice'>
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
    </div>) : 
               <Info
               title = {isOrderComplete ? `order complete:) id order #${orderId}` : "your cart is empty:("}
               image={isOrderComplete ? "./img/order.png" : "./img/korobka.png"}
               />}
            </div>

           
        <div className='purchases'><p className='p1'>Your purchases:</p></div>
        <div onClick={() => setCartOpened(false)} className='cancel'><img className='isClose' src='./img/svg/close.svg' alt="close"></img></div>
        <div className='buysell'>
            <span className='sumsell'>amount to be paid: </span>
        <div className='sum'><p className='currency'>$<span className='sum'> {totalPrice}</span></p></div>
        <div className='submitSell'><button onClick={onClickOrder} className='sell'>BUY</button></div></div>
        </div>
    </div>

  )
}

export default CartView;