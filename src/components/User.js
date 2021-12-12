import React, {useState, useEffect } from "react";
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './forms.css';

export const User = () => {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [_logout, _setLogout] = useState(false);

    const logout = () => {
        localStorage.removeItem('token');
        _setLogout(true);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        const apiUrl = 'https://studqueue.ninja/users/data';

        axios
        .get(apiUrl, { headers: { Authorization: `Bearer ${token}`}})
        .then((response) => {
            const userData = response.data;
            
            setPhone(userData.phone);
            setAddress(userData.address);
            setEmail(userData.email);
        })
        .catch((e) => {
            console.log(e);
        });
    })

    if (_logout) {
        return <Redirect to='/' />;
      } else {
        console.log('not logout');
    }

    return(
        <div className = 'userForm'>
           <p> <span className = 'userTitle'> phone: </span> <span className = 'userData'> {phone} </span> </p>
           <p> <span className = 'userTitle'> address: </span> <span className = 'userData'> {address} </span> </p>
           <p> <span className = 'userTitle'> email: </span> <span className = 'userData'> {email} </span> </p>
           <p className = 'myLink'> <Link to='/users' > See userList </Link> </p>
           <p className = 'myLink'> <Link to='/data' > Add information </Link> </p>
           <button id ='myBtn' onClick={() => logout()}> log out </button>
        </div>
    )
}