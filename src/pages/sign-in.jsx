import '../styles/style.css';
import React, { useState } from 'react';
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

    const isPwdValid = () => {
        const check = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return check.test(pwd);
    };

    const isEmailValid = () => {
        const check = /\S+@\S+\.\S+/;
        return check.test(email.toLowerCase())
    };

    const handleCheckbox = (e) => {
        if (checkbox) {
            setCheckbox(e.target.defaultCheked = "false");
        };
        if (!checkbox) {
            setCheckbox(e.target.defaultCheked = "true");
        };
    };


    const getData = () => {
        let getEmail = localStorage.getItem('email');
        let getPwd = localStorage.getItem('pwd');
        console.log(email === getEmail, pwd === getPwd);
        if (email === getEmail && pwd === getPwd && !checkbox) {
            window.location.assign(<Link to='/cursor-homework22/account-page'></Link>);
        } else if (email === getEmail && pwd === getPwd && checkbox) {
            window.location.assign(<Link to='/cursor-homework22/account-page'></Link>);
        }
        else {
            alert('Please - input correct email/password!');
            window.location.reload(<Link to='/cursor-homework22/'></Link>);
        }

    }


    return (
        <div className='wrapper'>
            <section className='sign-wrapper'>
                <div className='sign-logo-container'>
                    <img src={lock} className='lock-img'></img>
                    <h1>Sign In</h1>
                </div>
                <div className='sign-input-container'>
                    <input type="email" placeholder="Email Adress *" value={email} onChange={handleEmail}
                        className={`input-item ${isEmailValid() ? 'valid' : 'invalid'}`}
                        defaultValue={!checkbox ? email.toString() : null} />
                    <input type="password" placeholder="Password *" value={pwd} onChange={handlePwd}
                        className={`input-item ${isPwdValid() ? 'valid' : 'invalid'}`}
                        defaultValue={!checkbox ? email.toString() : null} />
                    <div className="checkbox-container">
                        <input type="checkbox" onChange={handleCheckbox} value={checkbox} defaultChecked="true" />
                        <span>Remember me</span>
                    </div>
                </div>
                <div className="sign-btn-container">
                    <button className='sign-btn' onClick={getData}>SIGN IN</button>
                    <div className='btn-questions'>
                        <p className='btn-bottom-question'>Forgot password?</p>
                        <Link to='/cursor-homework22/sign-up'><p className='btn-bottom-question'>Don`t have an account? Sign Up</p></Link>
                    </div>
                </div>
                <footer className='sign-footer-text-container'>
                    <p className='sign-footer-text'>Copyright © Your Website 2020.</p>
                </footer>
            </section>
        </div>
    )
};

