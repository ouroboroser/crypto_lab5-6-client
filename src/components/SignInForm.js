import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import './forms.css'

export const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [_auth, _setAuth] = useState(false);

  let error = false;

  const apiUrl = 'https://studqueue.ninja/users/sign-in';

  const auth = (username, password) => {
    if (username.length === 0 || password.length === 0) {
      alert('You need to specify corret data');
      error = true;
    };

    const data = {
      username,
      password,
    };

    if (!error) {
      axios
      .post(apiUrl, data)
      .then((response) => {
      console.log(response);
      const token = response.data.token;

      localStorage.setItem('token', token);

      if (token) {
        _setAuth(true);
      }
    })
    .catch((e) => {
      console.log(e);
    });
    };
  };

  if (_auth) {
    return <Redirect to='/user' />;
  } else {
    console.log('NOT AUTH');
  }

  return (  
    <div className = 'loginFormWrapper'>
      <div className = 'loginForm'>
        <div>
          <p> Sing in </p>
          <p> <input className = 'myInput' placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)}/> </p>
          <p> <input className = 'myInput' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/> </p>
          <button id ='myBtn' onClick={() => auth(username, password)}> Sign up </button>
          </div>
          <p className = 'myLink'> <Link to='/sign-up' > Create an account </Link> </p>
      </div>
    </div>
  );
};