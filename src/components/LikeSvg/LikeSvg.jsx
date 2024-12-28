import React, { useState } from 'react';
import './styles/styles.css';
import svgLike from './styles/like.svg';
import dislike from './styles/like-placeholder.svg';


const LikeSvg = () => {

    const [isLike, setIsLike] = useState(null)

    const handleClick = () =>{
        setIsLike(!isLike)
    }

  return (
    <div onClick={handleClick} className='LikeOrDislike'>
        <img src={isLike === true ? svgLike : dislike} className="like" alt='like'/>
    </div>
  )
}

export default LikeSvg;