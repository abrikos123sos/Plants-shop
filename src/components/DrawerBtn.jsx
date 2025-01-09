import React from 'react';
import svgFavorite from '../components/ContainersLists/unfavorite.svg';
import '../App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


const DrawerBtn = () => {
  return (
    <div className='linkedF'>
<a href='/favorite'><div className='favoriteLink'>
  <div className='links'>
 <img src={svgFavorite} className="favorite" alt='svg'/>
  </div>


</div></a>



</div>
  )
}

export default DrawerBtn;