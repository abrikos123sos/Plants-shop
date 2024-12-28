import React from 'react';
import ButtonSvg from '../ButtonSvg/ButtonSvg';

const IndoorCollections = ({collection}) => {
  return (
    <div className='indoorCollection'>

     {collection.map((items, id) =>(<div key={id} className='indoorsblock1'>     
      <ButtonSvg/>
    <span className='nameIndoor'>{items.name}</span>
    <img className='imageIndoor' src={items.image}/>
  <div className='hoversBlockDesc'>
    <span className='hoverSpanTitle'>{items.name}</span>
    <p className='hoverDesc'>{items.desc}</p>
  </div>
     </div>))}

    </div>
  )
}

export default IndoorCollections;