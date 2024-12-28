import React from 'react';
import ButtonSvg from '../../ButtonSvg/ButtonSvg';
import './cardstyle/cards.css';

const CardsCategories = ({cardsItems}) => {
  return (
    <div className='itemsCards'>
      
   {cardsItems.map( (items, id) => (<div key={id} className='cardItem'>
      <img src={items.image} className="imageCards" alt=''></img>
      <ButtonSvg/>
      <p className='tittleCard'>
    {items.name}</p>
      <p className='description'>{items.description}</p>
     </div>))}
    </div>
  )
}

export default CardsCategories;