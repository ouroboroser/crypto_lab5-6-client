import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { checkPassword } from '../helpers';
import '../App.css'
import './forms.css'

export const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [_auth, _setAuth] = useState(false);

  let error = false;

  const apiUrl = 'http://localhost:3001/users/sign-up';

  const auth = (username, password) => {
    if (username.length === 0 || password.length === 0) {
      alert('You need to specify corret data');
      error = true;
    };

    error = checkPassword(password, error);

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
    return <Redirect to='/data' />;
  } else {
    console.log('NOT AUTH');
  }

  return (  
    <div className = 'loginFormWrapper'>
      <div className = 'loginForm'>
        <div>
          <p> Login </p>
          <p> <input className = 'myInput' placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)}/> </p>
          <p> <input className = 'myInput' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/> </p>
          
          <label class="ohnohoney" for="name"></label>
          <input class="ohnohoney" autoComplete="off" type="text" id="name" name="name" placeholder="Your name here" />
          <label class="ohnohoney" for="email"></label>
          <input class="ohnohoney" autoComplete="off" type="email" id="email" name="email" placeholder="Your e-mail here" />
          <button id ='myBtn' onClick={() => auth(username, password)}> Sign in </button>
          </div>
          <p className = 'myLink'> <Link to='/signup' > Create an account </Link> </p>
      </div>
    </div>
  );
};

