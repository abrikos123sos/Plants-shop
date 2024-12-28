import React from 'react';
import './styles/form.css';
import { useForm, SubmitHandler } from 'react-hook-form'

const Forms = () => {
  return (
    <div className='forms'>
      
        <div className='cancelBlock'>
        <span className='xcnl'>x</span>
       <form className='forma'>
        <label className='labelfirst'>
            <span className='firstNames'>E-mail</span>
            <input type="email" className='inputfirst _inputs' name="firstName" />
        </label>
        <label className='labellast'>
            <span className='lastNames'>Last Name</span>
            <input className='inputlast _inputs' name="lastName" />
        </label>
        <div className='checked'>
            <input className='chex' type="checkbox"/>
            <span className='remember'>Remember me</span>
        </div>
        <span className='links'>Forgotten password</span>
        <button className='btnsubmit'>Login in</button>
        
       </form>
       </div>
    </div>
  )
}

export default Forms