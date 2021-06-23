import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
export const Navbar = () => {
    return (
        <>
        <div className="navbar">
        <h1 className='header'>Finder</h1>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/signup'>SignUp</NavLink>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/login'>Login</NavLink>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/about'>About</NavLink>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/home'>Home</NavLink>
        </div>
        </>
    )
}
