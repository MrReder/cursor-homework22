import '../styles/style.css';
import React, { useState } from 'react';
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

    const isEmailValid = () => {
        // const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const check = /\S+@\S+\.\S+/;
        return check.test(email.toLowerCase())
    };
    const isPwdValid = () => {
        const check = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return check.test(pwd);
    };

    const isNameValid = () => {
        const check = /^[A-Za-z].{2,}/;
        return check.test(name);
    };
    const isLastNameValid = () => {
        const check = /^[A-Za-z].{2,}/;
        return check.test(lastName);
    };

    const sendData = () => {
        if (handleCheckbox && isEmailValid() && isPwdValid() && isNameValid() && isLastNameValid()) {
            const userData = [name, lastName, email, pwd];
            localStorage.setItem('name', userData[0]);
            localStorage.setItem('lastName', userData[1]);
            localStorage.setItem('email', userData[2]);
            localStorage.setItem('pwd', userData[3]);

        } else if (!isEmailValid() || !isEmailValid() || !isPwdValid() || !isNameValid() || !isLastNameValid()) {
            alert(`Input correct information! Name and Last Name fields should contain at least 3 letters.
Password should contain at least 8 symbols(including lesser and greater letter).
Email should includes at least 3 symbols before the @, at least 2 symbols before the dot and at leats 2 symbols after dot.`)
        };
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
                        < input type="text" placeholder="First Name *" value={name} onChange={handleName} className={`input-item ${isNameValid() ? 'valid' : 'invalid'}`} style={{ width: 135 }} />
                        <input type="text" placeholder="Last Name *" value={lastName} onChange={handleLastName} className={`input-item ${isLastNameValid() ? 'valid' : 'invalid'}`} style={{ width: 135 }} />
                    </div>
                    <div className='sign-input-container'>

                        <input type="text" placeholder="Email Adress *" value={email} onChange={handleEmail} className={`input-item ${isEmailValid() ? 'valid' : 'invalid'}`} />
                        <input type="password" placeholder="Password *" value={pwd} onChange={handlePwd} className={`input-item ${isPwdValid() ? 'valid' : 'invalid'}`} />
                    </div>
                    <div className="checkbox-up-container">
                        <input type="checkbox" onChange={handleCheckbox} value={checkbox} defaultChecked="true" />
                        <span>I want to receive inspirations, marketing promotions and updates via email.</span>
                    </div>
                </div>
                <div className="sign-up-btn-container">
                    <button className='sign-btn' onClick={sendData}>SIGN UP</button>
                    <Link to='/cursor-homework22/'> <p className='btn-bottom-question'>Allready have an account? Sign In</p></Link>
                </div>
                <footer className='sign-footer-text-container'>
                    <p className='sign-footer-text'>Copyright © Your Website 2020.</p>
                </footer>
            </section>
        </div>
    )
};