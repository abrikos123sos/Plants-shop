import classNames from 'classnames';
import React, { useState } from 'react';
import CardsCategories from './CardsCaterories/CardsCategories';
import '../Assortment/Assortment.css';

const Assortment = ({itemLi}) => {

const [isActive, setIsActive] = useState(null)

const onSelectItem = (id) =>{
    setIsActive(id);
}

  return (
    <div className='assortMent'>
        <div className='blockNav'>
        <ul className='chooseBlocks'>
<li onClick={() =>onSelectItem(null)} className={classNames('seeAll', isActive === null ? 'active' : '')}>See All</li>
<div className='blockSeeBtn'>
{itemLi && itemLi.map((item, id) => (<li key={id} onClick={() => onSelectItem(id)} className={classNames('btnAssort', isActive === id ? 'active' : '')}>{item.name}</li>))}
</div>
        </ul>
        </div>
        <div className='blockCategories'>
           <CardsCategories cardsItems ={
            [
                {
                    id:1,
                    name: "Pet Friendly Plants",
                    description: "There are many houseplants options for your home that are non toxic. These plants will add life to your home while keeping your kids and pets safe",
                    image: './img/background.jpg',

                },
                {
                    id:2,
                    name: "Orchids",
                    description: "Orchids are easily everyones favorite flowering plant. Find new orchids, and orchid success items in this collection.",
                    image: './img/background2.jpg',
                   
                },
                {
                    id:3,
                    name: "Succulents",
                    description: "All succulents are cacti, but not all cacti are succulents. Both make low maintenance houseplants.",
                    image: './img/Succulents/succulents2.jpg',
      
                }           
            ]
           }/>
        </div>
    </div>
  )
}

export default Assortment;