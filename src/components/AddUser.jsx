/* eslint-disable jsx-a11y/label-has-associated-control */
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../firebase';
import styles from './styles/AddUser.module.css';

const AddUser = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState({
        userName: '',
        age: null,
        email: '',
        password: '',
    });
    const collectionRef = collection(db, 'users');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsers({
            ...users,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collectionRef, {
            name: users.userName,
            age: users.age,
            email: users.email,
            password: users.password,
        });
        navigate('/');
    };
    return (
        <div className={styles.mainBody}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">
                    <h1>user name</h1>
                </label>
                <input
                    onChange={handleChange}
                    name="userName"
                    type="text"
                    placeholder="input name"
                />
                <label htmlFor="age">
                    <h1>Age</h1>
                </label>
                <input onChange={handleChange} name="age" type="number" placeholder="input age" />
                <label htmlFor="email">
                    <h1>Email</h1>
                </label>
                <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="input email"
                />
                <label htmlFor="password">
                    <h1>password</h1>
                </label>
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    placeholder="input password"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default AddUser;
