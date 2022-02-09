import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import db from '../firebase';
import styles from './styles/Allusers.module.css';

const AllUsers = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const collectionRef = collection(db, 'users');
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const user = snapshot.docs.map((value) => ({
                id: value.id,
                ...value.data(),
            }));
            setUsers(user);
        });

        return () => unsubscribe();
    }, []);
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    });
    const deleteUser = async (id) => {
        const deleteRef = doc(db, 'users', id);
        await deleteDoc(deleteRef);
    };
    return (
        <div className={styles.middlebody}>
            <div className={styles.inputElement}>
                <input onChange={handleSearch} type="search" placeholder="search desire name" />
            </div>
            {filteredUsers.map((user) => (
                <div className={styles.card} key={user.id}>
                    <h1>{`Name: ${user.name} || `}</h1>
                    <h1>{`Age: ${user.age}`}</h1> <h1>Email :{user.email}</h1>{' '}
                    <h1>Password :{user.password}</h1>{' '}
                    <button type="button" onClick={() => navigate(`/updateuser/${user.id}`)}>
                        <Link to={`/updateuser/${user.id}`}>Update</Link>
                    </button>
                    <button onClick={() => deleteUser(user.id)} type="button">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AllUsers;
