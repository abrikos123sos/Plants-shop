import React, { useState } from 'react';
import './BlockAssort.css';
import BlockDot from './BlockDot';




const BlockAssort = () => {

  return (
    <div className='BlockGridGap2'>
<BlockDot itemsSort = {[
  {
    id: 1,
    image: './img/background.jpg',

   
  },
  {
    id:2,
    image: './img/background2.jpg',
  

  },
  {
    id:3,
    image: './img/background3.jpg',

  }
]}/>
<div className='assortInfo'>

  <p className='infoAssort'>100 + Plants</p>
  <p className='subInfo'>We wont our visitors to be inspired to get their hands dirty</p> 
</div>
</div>
  )
}

export default BlockAssort;