import {React,useState,useEffect} from 'react';
import {NavLink,Link} from 'react-router-dom';
import '../App.css';
export const Navbar = () => {
    const[loged,upLog]=useState(false);
    useEffect(()=>{
      if(localStorage.getItem("name") && localStorage.getItem("name")!=="null")
      upLog(true);
      else
      upLog(false);
    },[localStorage.getItem("name")])
    return (
        <>
        <div className="navbar">
        <h1 className='header'>Finder</h1>
        <NavLink className='nav-item' exact activeClassName="nav-item-select" to='/about'>About</NavLink>
        {loged
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
        </div>
        </>
    )
}