import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './forms.css';

export const UsersData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:3001/users/data/list';
        
        axios
        .get(apiUrl)
        .then((response) => {
            setUsers(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    });

    return(
        <div className = 'users'>
            {users.map(user => {
                return(
                    <div className = 'user'>
                        <p> <span className = 'userTitle'> id: </span> <span className = 'userData'> {user.id} </span> </p>
                        <p> <span className = 'userTitle'> username: </span> <span className = 'userData'> {user.username} </span> </p>
                        <p> <span className = 'userTitle'> phone: </span> <span className = 'userData'> {user.phone} </span> </p>
                        <p> <span className = 'userTitle'> address: </span> <span className = 'userData'> {user.address} </span> </p>
                        <p> <span className = 'userTitle'> email: </span> <span className = 'userData'> {user.email} </span> </p>
                    </div>
                )
            })}
        </div>
    )
};