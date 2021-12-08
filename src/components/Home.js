import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className = 'home'>
            <p> home page </p>
            <p className = 'myLink'> <Link to='/sign-up' > Create an account </Link> </p>
            <p className = 'myLink'> <Link to='/sign-in' > If you already have an account </Link> </p>
        </div>
    )
};

export default Home;