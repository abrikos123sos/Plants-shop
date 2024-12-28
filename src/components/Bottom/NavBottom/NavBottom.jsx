import React, { useState } from 'react';
import './styles/NavStyles.css';
import classnames from 'classnames'

const NavBottom = ({itemsBottom}) => {

const [active, setActive] = useState(null);

const onSetActive = (id, e) =>{
  setActive(id)

}


  return (
    <div className='navBatton'>
      <ul className='gridNav'>
{itemsBottom.map((items, id) =>
<li onClick={() => onSetActive(id)} className={classnames('socilalItem', active === id ? 'active' : '')} key={id}><a className='linksitems' href="#">
<span className='socialLinks'>{items.name}</span>
  </a>
  </li>
)}
      </ul>
    </div>
  )
}

export default NavBottom;