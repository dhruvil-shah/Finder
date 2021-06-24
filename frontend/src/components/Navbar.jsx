import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import '../App.css';
export const Navbar = () => {
    return (
        <>
        <div className="navbar">
        <h1 className='header'>Finder</h1>
        {localStorage.getItem("name")!==null
        ?
        <>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/signout'>SignOut</NavLink>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/home'>Home</NavLink>
        </>
        :
        <>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/signup'>SignUp</NavLink>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/login'>Login</NavLink>
        </>
        }
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/about'>About</NavLink>
        </div>
        </>
    )
}
