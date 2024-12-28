import React, {useState} from 'react';
import './BlockAssort.css';
import classNames from 'classnames';




const BlockDot = ({itemsSort}) => {
    
    const [isActive, setIsActive] = useState(null)


    const handleClick = (id) =>{
        setIsActive(id)  


      } 
      return (
        <div className='blockAssort'>
        <div className='circleChoose'>
          {
        itemsSort.map((items, id) =>(<div key={id}  onClick={() => handleClick(id)} className={classNames('chooseBlock', isActive === id ? 'active' : '')}>
          <img className='imageStyle' src={items.image}
         alt="image" />
        </div>))}
         </div>
            </div>
      )
    }
    
    export default BlockDot;
    