import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/styleNavigation/style.css';

import NavComp from './NavComp';

const Navigation = () => {



  return (
    <div className='mainNav'>

        <NavComp onClick={(id) => console.log(id)}  itemsBtn = {[
          {
            "name": 'Home',
            "id": 1,
            "link":"/"
          },
          {
            "name": "Contact",
            "id": 2
          },
          {
            "name": "Blog",
            "id": 3
          },
          {
            "name": "Shop",
            "id": 4,
            "link":"/shop"
          },
          {
            "name": "Login in",
            "id": 5
          }
          
        ]} />  
     

    </div>
  )
}

export default Navigation;