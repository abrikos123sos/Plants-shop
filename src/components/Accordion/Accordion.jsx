import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './styles/accordion.css';




const Accordion = ({accordionsString}) => {

const [select, setSelect] = useState(null)


const ref =useRef();

useEffect(() => {
    const handleClick = (e) =>{
        if(ref.current && !ref.current.contains(e.target)){
            setSelect(select === null)
        }
    }
    console.log(ref)
})



const toggle = (id, e) =>{

    if(select === id) {
        setSelect(null)
    } else {
        setSelect(id)
    }
}

  return (
    <div className='accordionBlock'>
        <div className='accordions'>
      {accordionsString.map((items,id) => (<div onClick={() => toggle(id)} key={id} className={classNames('items')} ref={ref} >
        <div className='title'>
            <h2>{items.questions}</h2>
            <span>{select === id ? '-' : "+"}</span>
        </div>
        <div className={classNames('content',select === id ? 'show' : 'content')}>{items.answer}</div>
      </div>))}
      
        
        </div>
        </div>

  )
}

export default Accordion;