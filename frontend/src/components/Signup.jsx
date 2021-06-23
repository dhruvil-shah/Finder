import React from 'react';
import '../App.css';

export const Signup = () => {
    return (
        <div>
        <form class="login" >
        <input type="text" placeholder="Username" required/><br/>
        <input type="number" placeholder="Phone No." required/><br/>
        <input type="password" placeholder="Password" required/><br/>
        <input type="password" placeholder="Confirm Password" required/><br/>
        <button>Register</button><br/>
        <span style={{color:"white"}}>Already have an account?&nbsp;&nbsp;</span><a href='/login'>Sign In</a>
        </form>
        </div>
    )
}
