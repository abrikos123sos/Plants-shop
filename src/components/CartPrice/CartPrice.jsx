import React from 'react';
import './styles/cartsPrice.css';
import AppContext from '../Page/ShopPage/context';

const CartPrice = ({id,image,title,desc,check,uncheck,currency,price,onPlus, setCounter}) => {

    const {isItemAddToCart} = React.useContext(AppContext)

const handleAddBtn = () =>{
      setCounter(id)
      onPlus({id,image,title,desc,check,uncheck,currency,price})

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
                   {isItemAddToCart(id) ? <img className='imgcheck _btn' src={check} alt="button"/> :
                    <img className='imguncheck _btn' src={uncheck} alt="button"/>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartPrice