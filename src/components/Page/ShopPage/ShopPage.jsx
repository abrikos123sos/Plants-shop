import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartPrice from '../../CartPrice/CartPrice';
import Cart from './Cart';
import CartView from './CartView/CartView';
import './styles/shopPage.css';
import axios from 'axios'

const ShopPage = () => {
 
const[count, setCount] =useState(0);



const [items, setItems] = useState([]);

useEffect(() =>{
axios.get('http://localhost:3001/dataplants').then((res) => {
  setItems(res.data)
});
axios.get('http://localhost:3002/cart').then((res) => {
  setCartItems(res.data)
});
},[]);

const [searchValue, setSearchValue] = useState("")
const onChangeValue = (e) =>{
  setSearchValue(e.target.value);
};

const resetValue =() =>{
  setSearchValue('');
};
const [cartItems, setCartItems] = useState([]);
const [cartOpened, setCartOpened] = useState(false);

const onAddToCart = (obj) =>{
  axios.post('http://localhost:3002/cart', obj);
  setCartItems(prev =>[...prev, obj]);
};


const onRemoveItem = (id) =>{
 axios.delete(`http://localhost:3002/cart/${id}`);
  setCartItems(prev => prev.filter(item => item.id !== id));
};

  return (
    <div className='shopCards'>
{cartOpened && <CartView items={cartItems} onCloseCart={() => setCartOpened(false)}
onRemove={onRemoveItem}
/>}
        <div className='header'>
          <div className='inputSearch'>
            <div onClick={resetValue} className='closeblock'>
           {searchValue && <img className='closeSvg' src='./img/svg/close.svg'/>}
            <input type="text" className='search' onChange={onChangeValue} value={searchValue} placeholder='Поиск...'></input>
            </div>
          </div>
            <div className='linksimg'>
        <Link className='pngplantsz' to="/">
            <img className='pngplants' src='./img/removepngplants.png'></img></Link></div>
            <Link className='headName' to="/"><p >Shop Plants</p>
         <p className='subhead'>{searchValue ? `${searchValue}` : "plant store"}</p></Link>
        <div className='blockCart'> 
            <div className='cartlink'>
              <Cart onClickCart={() =>setCartOpened(true)}/>
              </div>
            <div className='currenc'><p className='currency'>$<span className='price'>0</span></p>
              </div>       
            </div>
        </div>
        <div className='moreassortment'>
{items.filter((item) =>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((items,id) =><CartPrice key={id}
id={items.id}
image={items.image}
title={items.title}
desc={items.desc}
check={items.check}
uncheck={items.uncheck}
currency={items.currency}
price={items.price}
onPlus = {(obj) =>onAddToCart(obj)}
/>)}
        </div>
    </div>
  )
}

export default ShopPage;