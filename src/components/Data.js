import React from "react";
import { useState } from "react";
import { validateEmail } from '../helpers/checkPassword';
import axios from "axios";
import { Redirect } from "react-router";

export const Data = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [redirectToUsersList, setRedirectToUserList] = useState(false);

  const createUserData = (phone, email, address) => {
      if (phone.length === 0 || email.length === 0 || address.length === 0) {
          alert('You need to specify corret data');
      };

      let error = false;
      
      error = validateEmail(email);

      const apiUrl = 'https://studqueue.ninja/users/data';

      const token = localStorage.getItem('token');

      const data = {
          phone,
          email,
          address,
        };

      if (!error) {
        axios
        .post(apiUrl, data, { headers: { Authorization: `Bearer ${token}`}})
        .then((response) => {
          console.log(response);
          
          if (response.status === 201) {
            setRedirectToUserList(true);
          };
        })
        .catch((e) => {
          console.log(e);
        });
      };
  };

  if (redirectToUsersList) {
    return <Redirect to='/user' />;
  } else {
    console.log('not add data');
  }

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
