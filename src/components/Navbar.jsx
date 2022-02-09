import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink
                        style={({ isActive }) => {
                            return isActive ? { color: '#fbc531' } : { color: '#fff' };
                        }}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => {
                            return isActive ? { color: '#fbc531' } : { color: '#fff' };
                        }}
                        to="/adduser"
                    >
                        Add user
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => {
                            return isActive ? { color: '#fbc531' } : { color: '#fff' };
                        }}
                        to="/updateuser"
                    >
                        Update User
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
