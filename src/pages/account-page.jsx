import '../styles/style.css';
import React from 'react';



const createAccPage = () => {
    const name = localStorage.getItem('name');
    const lastName = localStorage.getItem('lastName');
    return (
        <>
            <h1>{name} {lastName}</h1>
            <h2>Welcome to your Account Page!!!</h2>
        </>
    );
};

export default createAccPage;