import React from 'react';
import Accordion from '../../Accordion/Accordion';
import Assortment from '../../Assortment/Assortment';
import  InfoContent  from '../../BlockInfoConctent/InfoContent';
import BlockNewPlants from '../../BlockNewPlants/BlockNewPlants';
import Bottom from '../../Bottom/Bottom';
import IndoorCollections from '../../IndoorCollection/IndoorCollections';
import TittleCollection from '../../IndoorCollection/TittleCollections/TittleCollection';
import NewPlants from '../../NewPlants/NewPlants';
import QualityPlants from '../../QualityPlants/QualityPlants';
import DescQuality from '../../QualityPlants/TitleQuality/DescQuality';
import TitleQuality from '../../QualityPlants/TitleQuality/TitleQuality';
import Container from '../../Container/Container';
import './MainStyle/style.css';


const MainContainer = () => {
  return (
    <div className='mainContainer'>   
        <Container/>
      <InfoContent/>
     <Assortment itemLi ={[
      {
      id:1,
      name: "Outdoor Plant",
     },
     {
      id: 2,
      name: "Indoor Plant",
     },
     {
     id: 3,
     name: "Flower Pot",
    },
    {
      id: 4,
      name: "Potted Plant",
    }
     ]}/>
     <NewPlants/>
     <BlockNewPlants
     itemsPlants ={[
      {
        id:1,
        image: './img/Peperomia/peperomia.jpg',
        btn:'./img/svg/right-arrow-white.svg',
        title: "Peperomia Plants",
        desc: "Moist but well-drained",
        currency: '$',
        price: 122
        
      },
      {
        id: 2,
        image: './img/Feadle/feadleleaffig.jpg',
        title: "Fiddle-Leaf Fig",
        desc: "Medium moisture, well-draining",
        btn:'./img/svg/right-arrow-white.svg',
        currency: '$',
        price: 160
      },
      {
        id: 3,
        image: './img/Calethia/calethia.jpg',
        title: "Calathea Orbifolia",
        btn:'./img/svg/right-arrow-white.svg',
        desc: "Moist but well-drained",
        currency: '$',
        price: 152
      },
      {
        id:4,
        image: './img/Nettles/nettleblock.jpg',
        title: "Nettles Plants",
        desc: "Moist but well-drained",
        btn:'./img/svg/right-arrow-white.svg',
        currency: '$',
        price: 92
        
      },
      {
        id: 5,
        image: './img/Succulents/succulentsblock.jpg',
        title: "Succulents Plants",
        desc: "Medium moisture, well-draining",
        currency: '$',
        btn:'./img/svg/right-arrow-white.svg',
        price: 210
      },
      {
        id: 6,
        image: './img/PeaceLily/Peacelilyblock.jpg',
        title: "Peace Lily plants",
        desc: "Moist but well-drained",
        btn:'./img/svg/right-arrow-white.svg',
        currency: '$',
        price: 152
      },    
     ]}/>
  <TittleCollection/>
  <IndoorCollections collection = {[
    {
      id:1, 
      name:"Philodendron",
      image:'./img/Philodendron/philodendron.jpg',
      desc:'Philodendron comes in a variety of leaf shapes nad colors, making it a great plant to compliment your home decor while also being low maintenance.'
    },
    {
      id:2,
      name:"Calathea",
      image:'./img/Calethia/calethiaCollections.jpg',
      desc:'Calathea comes in a variety of leaf shapes nad colors, making it a great plant to compliment your home decor while also being low maintenance.'
    },
    {
      id:3,
      name:"Air Purifying",
      image:'./img/AirPurifuing/airpurifyingblock.jpg',
      desc:'Air Purifying comes in a variety of leaf shapes nad colors, making it a great plant to compliment your home decor while also being low maintenance.'
    },
    {
      id:4,
      name:"Low Light Tolerant",
      image:"./img/LowLightTolerant/LowLightTolerantblock.jpg",
      desc:'Low Light Tolerant comes in a variety of leaf shapes nad colors, making it a great plant to compliment your home decor while also being low maintenance.'
    }
  ]}/>
  <TitleQuality/>
  <QualityPlants/>
  <DescQuality/>
  <Accordion accordionsString = {[{
    id:1,
    questions: 'Ordering for dilevery',
    answer:"1. Register on the website.2. Choose the product you need.3.Please provide your details, your residential address/phone number so that we can contact you. 4.Select a payment method. 5.Confirm your order."
  },
  {
    id:2,
    questions:"Potting Services",
    answer:"We offer potting on in store purchases or you are welcome to bring in your own and we can pot theme for you. There is a fe depending on what supplies are used. Visit ur or call us for more details."
  },
  {
    id:3,
    questions:"Do we ship plants?",
    answer:"We deliver the plant by ship, just as they are brought to us from different places."
  },
  {
    id:4,
    questions:"Ordering for Pick up?",
    answer:"All you have to do is leave a request on our website and indicate the “pickup” option."
  }
  ]}/>
  <Bottom/>
    </div>
  )
}

export default MainContainer;