import React from 'react';
import Navigation from '../Navigation/Navigation';
import classNames from 'classnames';


import '../Page/MainContainer/MainStyle/style.css';
import BlockAssort from '../BlockAssort/BlockAssort';


const Container = () => {



  return (
    <div className={classNames('container')}>
<Navigation/> 
<div className='mainTittle'>
  <span className='subtittle'>Petal power</span>
  <span className='tittle'>GROWTH</span>
  <span className='slogantittle'>We're your online houseplant. We offer a wide range of 
houseplant and <p>accosseries shipped directly from shopped our hous to yours.</p></span>
</div>
<BlockAssort/>
    </div>
    
  )
}

export default Container