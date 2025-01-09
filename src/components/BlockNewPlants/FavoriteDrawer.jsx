import React, { useState } from 'react';
import MyContext from '../../apjscontext';
import './styles/stylesBlockNewPlants.css';
import svgLike from "../ContainersLists/favirute.svg";
import disLike from "../ContainersLists/unfavorite.svg";

const FavoriteDrawer = ({items}) => {

const {isItemAddToFavorite, cartFavorite} = React.useContext(MyContext)


console.log(items)

    const [isLike, setIsLike] = useState(null);
    const handleClick = () =>{
        setIsLike(!isLike);
    }
  return (
    <div className='favoriteDrawer'>
        <div className='blocksMain'>
{cartFavorite && cartFavorite.map((items,id)=>
<div className='showcaseBlocks' key={id}>
  <div className='isFavorite'>asdasd
  <div onClick={handleClick} className='LikeOrDislike'>
        <img src={!isItemAddToFavorite === true ? svgLike : disLike}  className="like" alt='like'/>
    </div>
</div>
      <p className='tittles'>{items.id} <br/>
      <span className='desc'>{items.desc}</span></p>
         <img className='imageShowCase' src={items.image}/>
        <span className='currency'>{items.currency}{items.price}
            <div className='btnPrice'>
            <button className='btn__showcase'><img className='arrowBtnShowCase' src={items.btn}alt='icon rigth arrow Button'></img></button>
            </div>
             </span>

    </div>)}

    </div>
    </div>
  )
}

export default FavoriteDrawer;