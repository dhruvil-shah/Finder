import React from 'react'

export const Login = () => {
    return (
        <div>
        <form class="login">
        <input type="text" required placeholder="Username"/><br/>
        <input type="password" required placeholder="Password"/><br/>
        <button>Login</button><br/>
        <span style={{color:"white"}}>Do not have a account?&nbsp;&nbsp;</span><a href='/signup'>Sign Up</a>
        </form>
        </div>
    )
}
