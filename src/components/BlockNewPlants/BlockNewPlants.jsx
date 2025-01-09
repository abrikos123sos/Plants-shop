import React, { useEffect, useState } from 'react';
import './styles/stylesBlockNewPlants.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/stylesBlockNewPlants.css';
import { Pagination } from 'swiper/modules';
import FirstContainers from '../ContainersLists/FirstContainers';
import axios from 'axios';
import MyContext from '../../apjscontext';
import FavoriteDrawer from './FavoriteDrawer';
import { Link } from 'react-router-dom';









const BlockNewPlants = () => {
const [itemsFavorite, setItemsFavorite] = useState([])

const [cartFavorite, setIsFavorite] = useState([]);






useEffect(() =>{
    
async function fetchData(){
  const itemsResponse = await axios.get('http://localhost:3005/FavoriteDrawer');
  const cartResponse = await axios.get('http://localhost:3002/cart');

setIsFavorite(cartResponse.data);
setItemsFavorite(itemsResponse.data);

}

fetchData();
  },[])

  const onAddFavorite = (obj) => {
if(cartFavorite.find((item) => Number(item.id) === Number(obj.id))) {
// axios.delete(`http://localhost:3002/cart/${obj.id}`, obj);
  setIsFavorite(prev =>prev.filter((item) => Number(item.id) !== Number(obj.id)))
} else {
 // axios.post('http://localhost:3002/cart',obj)
  setIsFavorite(prev => [...prev, obj])
}  
 }
   
const onRemoveItem = (id, obj) =>{
//axios.delete(`http://localhost:3002/cart/${id}`,obj);
setIsFavorite(prev => prev.filter(item => item.id !== id));

};


const isItemAddToFavorite = (id) =>{
 return cartFavorite.some((obj) => Number(obj.id) === Number(id))
}


  return (
<MyContext.Provider value={{isItemAddToFavorite, cartFavorite}}>
    <div className='blogNewPlants'>
      <div className='blogListPlants'>
        <Swiper spaceBetween={10}
        pagination = {{clickable:true}}
        modules={[Pagination]}
        slidesPerView={3}
        >
       {itemsFavorite.map((items, id) =>(<SwiperSlide key={id}>
       
        <FirstContainers 
  id={items.id}
  btn = {items.btn} 
  image = {items.image}
  title ={items.title}
  desc ={items.desc}
  currency = {items.currency}
  price = {items.price}
  added = {(obj) =>onAddFavorite(obj) }
  onRemove = {(obj) => onRemoveItem(obj)}
        />   </SwiperSlide>))}     
        </Swiper>
        </div>  
      </div>
        
      </MyContext.Provider>

  )
}

export default BlockNewPlants;
