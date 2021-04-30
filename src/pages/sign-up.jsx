import '../styles/style.css';
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/local-storage';
import lock from '../img/padlock.svg';
import { Link } from 'react-router-dom';

export const SignUp = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [checkbox, setCheckbox] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePwd = (e) => {
        setPwd(e.target.value);
    }

    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleCheckbox = (e) => {
        if (checkbox) {
            setCheckbox(e.target.defaultCheked = "false");
        };
        if (!checkbox) {
            setCheckbox(e.target.defaultCheked = "true");
        };
    };

    const sendData = () => {
        const userData = [
            { name: handleName },
            { lastName: handleLastName },
            { email: handleEmail },
            { pwd: handlePwd }
        ]

        if (handleCheckbox) {
            localStorage.setItem('userData', JSON.stringify(userData));

        }
    }
    return (
        <div className='wrapper'>
            <section className='sign-wrapper'>
                <div className='sign-up-logo-container'>
                    <img src={lock} className='lock-img'></img>
                    <h1>Sign Up</h1>
                </div>
                <div className='sign-up-input-container'>
                    <div className="person-info">
                        <input type="text" placeholder="First Name *" value={name} onChange={handleName} className='input-item' style={{ width: 135 }} />
                        <input type="text" placeholder="Last Name *" value={lastName} onChange={handleLastName} className='input-item' style={{ width: 135 }} />
                    </div>
                    <div className='sign-input-container'>
                        <input type="text" placeholder="Email Adress *" value={email} onChange={handleEmail} className='input-item' />
                        <input type="text" placeholder="Password *" value={pwd} onChange={handlePwd} className='input-item' />
                    </div>
                    <div className="checkbox-up-container">
                        <input type="checkbox" onChange={handleCheckbox} value={checkbox} defaultChecked="true" />
                        <span>I want to receive inspirations, marketing promotions and updates via email.</span>
                    </div>
                </div>
                <div className="sign-up-btn-container">
                    <button className='sign-btn' onClick={sendData}>SIGN UP</button>
                    <Link to='/'> <p className='btn-bottom-question'>Allready have an account? Sign In</p></Link>
                </div>
                <footer className='sign-footer-text-container'>
                    <p className='sign-footer-text'>Copyright © Your Website 2020.</p>
                </footer>
            </section>
        </div>
    )
};