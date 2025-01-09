
import './App.css';
import MainContainer from './components/Page/MainContainer/MainContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Forms from './components/Form/Forms';
import React from 'react';
import ShopPage from './components/Page/ShopPage/ShopPage';




import DrawerBtn from './components/DrawerBtn';
import FavoriteDrawer from './components/BlockNewPlants/FavoriteDrawer';
import MyContext from './apjscontext';


/*https://dribbble.com/shots/22341969-Plant-shop-landing-page 
,
https://www.google.com/search?q=pet+freandly+plants+categories&oq=pet+freandly+plants+categories&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAHSAQkxMDIyM2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8*/ 

function App() {



const {cartFavorite} = React.useContext(MyContext)
const handleScrollTop = () =>{
window.scrollTo({
  top:0,
  left:0,
  behavior:"smooth",
})
}

  return (

    <div className="App">

      <div onClick={handleScrollTop} className='blockUpArrow'>
 <img className='arrowup' src='./img/svg/arrowUp.svg' />
      </div>

      
<BrowserRouter>
<Routes>
<Route path ="/form" element={<Forms/>}/>
<Route path ="/shop" element={<ShopPage/>}/>
<Route path='/' element={<MainContainer/>}/>
<Route path ='/favorite' element={<FavoriteDrawer items={cartFavorite}/>}/>
</Routes>
</BrowserRouter>
    </div>

  );
}

export default App;
