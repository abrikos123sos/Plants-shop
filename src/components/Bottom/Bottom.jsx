import React from 'react';
import NavBottom from './NavBottom/NavBottom';
import './styles/bottom.css';

const Bottom = () => {
  return (
    <div className='bottomContaint'>
        <div className='blockDesc'>
        <p className='titleBottom'>Join the community!</p>
        <p className='subttitleBottom'>Subscribe to the Forager to receive monthly plant tips, <br /> store updates, promations & more.</p>
        </div>
        <div className='navigationBlock'>
            <div className='navBlock'>
                <NavBottom
                itemsBottom = {[

                    {
                        id:1, 
                        name: 'Instagram',
                        link:"",
                    },
                    {
                        id:2,
                        name: "Twitter",
                        link:"",
                    },
                    {
                        id:3,
                        name: "Linkedln",
                        link:"",
                    },
                    {
                        id:4,
                        name:"Telegram",
                        link:"",
                    },
                    {
                        id:5,
                        name:"Pinterest",
                        link:"",
                    },
                ]}
                />
            </div>
            <span className='permissions'>2024. All Right Reserved.</span>
        </div>
    </div>
  )
}

export default Bottom;