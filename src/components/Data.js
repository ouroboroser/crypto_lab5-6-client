import React from "react";
import { useState } from "react";
import { validateEmail } from '../helpers';
import axios from "axios";

export const Data = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const createUserData = (phone, email, address) => {
      if (phone.length === 0 || email.length === 0 || address.length === 0) {
          alert('You need to specify corret data');
      };
      
      validateEmail(email);

      const apiUrl = 'http://localhost:3001/users/data';

      const token = localStorage.getItem('token');

      const data = {
          phone,
          email,
          address,
        };
      
      axios
      .post(apiUrl, data, { headers: { Authorization: `Bearer ${token}`}})
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="loginFormWrapper">
      <div className="loginForm">
        <div>
          <p> Tell something about you </p>
          <p> <input className="myInput" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> </p>
          <p> <input className="myInput" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> </p>
          <p> <input className="myInput" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} /> </p>

          <button id="myBtn" onClick={() => createUserData(phone, email, address)}> Add new data </button>
        </div>
      </div>
    </div>
  );
};
