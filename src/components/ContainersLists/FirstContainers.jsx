import React, {useState} from 'react'
import '../BlockNewPlants/styles/stylesBlockNewPlants.css';

import svgLike from './favirute.svg';
import disLike from './unfavorite.svg';

import MyContext from '../../apjscontext';
import FavoriteDrawer from '../BlockNewPlants/FavoriteDrawer';






const FirstContainers = ({id,btn,image,title,desc,currency,price, added,onRemove}) => {

const {isItemAddToFavorite} = React.useContext(MyContext)

  const [isLike, setIsLike] = useState(null)
  const handleClick = () =>{
      setIsLike(isLike);
      added({btn,image,title,desc,currency,price,id})
     
  }


 

return (

<div className='blocksMain'>

<div className='showcaseBlocks'>
  <div className='isFavorite'>
  <div onClick={handleClick} className='LikeOrDislike'>
        <img src={!isItemAddToFavorite(id) === true ? svgLike : disLike}  className="like" alt='like'/>
    </div>
</div>
      <p className='tittles'>{title} <br/>
      <span className='desc'>{desc}</span></p>
         <img className='imageShowCase' src={image}/>
        <span className='currency'>{currency}{price}
            <div className='btnPrice'>
            <button className='btn__showcase'><img className='arrowBtnShowCase' src={btn} alt='icon rigth arrow Button'></img></button>
            </div>
             </span>

    </div>

    </div>

  )
}

export default FirstContainers;