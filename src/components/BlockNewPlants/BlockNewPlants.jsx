import React from 'react';
import './styles/stylesBlockNewPlants.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/stylesBlockNewPlants.css';
import { FreeMode, Pagination } from 'swiper/modules';
import FirstContainers from '../ContainersLists/FirstContainers';


const BlockNewPlants = ({itemsPlants}) => {



  return (
    <div className='blogNewPlants'>
 
<Swiper spaceBetween={20}
      slidesPerView={3}
      freeMode={true}
      pagination={{clickable: true}}
      modules={[Pagination, FreeMode]}>
 
      {itemsPlants.map((items,id) => (<div className='blogListPlants' key={id}>
      <SwiperSlide ><FirstContainers
        id={items.id}
        title={items.title}
        desc={items.desc}
        image={items.image}
        currency={items.currency}
        price={items.price}
        btn={items.btn}/>
        
              </SwiperSlide>
      </div>))}

      </Swiper>
      </div>
  
  )
}

export default BlockNewPlants
