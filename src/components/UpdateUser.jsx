import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import db from '../firebase';
import styles from './styles/UpdateUser.module.css';

const UpdateUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [users, setUsers] = React.useState({
        name: '',
        age: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsers({
            ...users,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const collectionRef = doc(db, `users/${id}`);
        await updateDoc(collectionRef, {
            name: users.name,
            age: users.age,
            email: users.email,
            password: users.password,
        });
        navigate('/');
    };
    return (
        <div className={styles.mainBody}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    value={users.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="edit name"
                />
                <input onChange={handleChange} name="age" type="number" placeholder="edit age" />
                <input onChange={handleChange} name="email" type="email" placeholder="edit email" />
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    placeholder="edit password"
                />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
