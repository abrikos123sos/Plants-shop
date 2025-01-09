import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CartPrice from '../../CartPrice/CartPrice';
import Cart from './Cart';
import CartView from './CartView/CartView';
import './styles/shopPage.css';
import axios from 'axios'
import AppContext from './context';
import PropTypes from 'prop-types';





const ShopPage = () => {




const [items, setItems] = useState([]);

useEffect(() =>{

async function fetchData(){
  const cartResponse = await axios.get('https://677553af92222241481b2ef4.mockapi.io/Drawer');
  const itemsResponse = await axios.get('https://677553af92222241481b2ef4.mockapi.io/dataplants');

setCartItems(cartResponse.data);
setItems(itemsResponse.data);

}

fetchData();
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

if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
  axios.delete(`https://677553af92222241481b2ef4.mockapi.io/Drawer/${obj.id}`);
  setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)))
} else {
  axios.post('https://677553af92222241481b2ef4.mockapi.io/Drawer', obj);
  setCartItems(prev =>[...prev, obj]);

};

};


const onRemoveItem = (id) =>{
 axios.delete(`https://677553af92222241481b2ef4.mockapi.io/Drawer/${id}`);
  setCartItems(prev => prev.filter(item => item.id !== id));

};

const totalPrice = cartItems.reduce((sum,obj) => obj.price + sum, 0);



const [counter, setCounter] = useState(0)
const totalsCarts = cartItems.length;


const handleSetCount = () =>{
  setCounter(totalsCarts)
  }


const isItemAddToCart = (id) => {
return cartItems.some(((obj) => Number(obj.id) === Number(id)));
}


  return (
    <AppContext.Provider value={{items, cartItems, isItemAddToCart , setCartOpened, setCartItems ,setCounter} }>
    <div className='shopCards'>
{cartOpened && <CartView totalPrice ={totalPrice}
onRemove={(obj) =>onRemoveItem (obj)}
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
              <Cart  
              cont ={totalsCarts}
           
              onClickCart={() =>setCartOpened(true)}/>
              </div>
            <div className='currenc'><p className='currency'>$<span className='price'>{totalPrice}</span></p>
              </div>    
              <div className='profile'>
                <img className='user' src='./img/svg/profile.svg' alt='user'></img>
                </div>   
            </div>
        </div>
        <div className='moreassortment'>
{items.filter((item) =>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((items,id) =><CartPrice key={id} {...items} 

setCounter ={ () => handleSetCount()}

onPlus = {(obj) =>onAddToCart(obj)} 

/>)}
        </div>
    </div>
    </AppContext.Provider>
  )
  
}






export default ShopPage;