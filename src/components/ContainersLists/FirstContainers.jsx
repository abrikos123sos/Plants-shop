import React from 'react'
import '../BlockNewPlants/styles/stylesBlockNewPlants.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LikeSvg from '../LikeSvg/LikeSvg';



const FirstContainers = ({btn,image,title,desc,currency,price}) => {


  return (
<div className='blocksMain'>
<div className='showcaseBlocks'>
  <div className='isFavorite'>
<LikeSvg/>
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