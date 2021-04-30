import '../styles/style.css';
import React, { useState, useEffect } from 'react';
import lock from '../img/padlock.svg';
import { Link } from 'react-router-dom';

export const SignIn = () => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [checkbox, setCheckbox] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePwd = (e) => {
        setPwd(e.target.value);
    }
    const handleCheckbox = (e) => {
        if (checkbox) {
            setCheckbox(e.target.defaultCheked = "false");
        };
        if (!checkbox) {
            setCheckbox(e.target.defaultCheked = "true");
        };
    };



    return (
        <div className='wrapper'>
            <section className='sign-wrapper'>
                <div className='sign-logo-container'>
                    <img src={lock} className='lock-img'></img>
                    <h1>Sign In</h1>
                </div>
                <div className='sign-input-container'>
                    <input type="text" placeholder="Email Adress *" value={email} onChange={handleEmail} className='input-item' />
                    <input type="text" placeholder="Password *" value={pwd} onChange={handlePwd} className='input-item' />
                    <div className="checkbox-container">
                        <input type="checkbox" onChange={handleCheckbox} value={checkbox} defaultChecked="true" />
                        <span>Remember me</span>
                    </div>
                </div>
                <div className="sign-btn-container">
                    <button className='sign-btn' >SIGN IN</button>
                    <div className='btn-questions'>
                        <p className='btn-bottom-question'>Forgot password?</p>
                        <Link to='/sign-up'><p className='btn-bottom-question'>Don`t have an account? Sign Up</p></Link>
                    </div>
                </div>
                <footer className='sign-footer-text-container'>
                    <p className='sign-footer-text'>Copyright © Your Website 2020.</p>
                </footer>
            </section>
        </div>
    )
};

// import React, { useState,useEffect } from 'react';
// const Form = () => {
//   const [name, setname] = useState('')
//   const [price,setprice]=useState('')
//   const [item,setitem]=useState([]) 

// const handleSubmit = (e) => {

//     e.preventDefault();
//     setitem([...item,{name:name,price:price}])
//     setname('')
//     setprice('')

//   };

// return(
// <form onSubmit={handleSubmit}>

// <input type = "text" name="name" value={name} onChange={(e) => setname(e.target.value)}/>

// <input type = "number" name="price" value={price} onChange={(e) => setprice(e.target.value)}/>

// <input type = "submit"/>

// </form>
// )

// useEffect(()=>{

//     const data = localStorage.getItem('data')

//     if(data){
//       setitem(JSON.parse(data))
//      }

//     },[])

//     useEffect(()=>{

//       localStorage.setItem('data',JSON.stringify(item))

//     })