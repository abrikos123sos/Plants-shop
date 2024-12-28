import React, { useState } from 'react';
import '../Navigation/styleNavigation/style.css';
import classNames from 'classnames';

const NavComp = ({itemsBtn}) => {

const [isActive, setIsActive] = useState(null)



  return (
    <div className='contentNav'>
        <div className='inputSearch'>
        <div className='searchIcon'>
        <img className='searchSvg' src='./img/svg/search.svg'/>
        </div>
        <input className='search' type="text">
        </input>
      </div>
   {itemsBtn.map ((items, id) =><button key={id} onClick={() => setIsActive(id)} className={classNames('btn', isActive === id ? 'active' : 'disabled')}><a href={items.link} className='refLink'>{items.name}</a></button> )
   }  
   </div>
  )
}

export default NavComp