import {React,useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../App.css';

export const Signup = () => {
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",
        phone:"",
        password:"",
        cpassword:""
    }); 
    const changeMe=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }
    const saveUser=async(e)=>{
        e.preventDefault();
        if(user.cpassword!== user.password){
            alert("passwords doesn't match");
            return;
        }
        try{

            const res= await fetch('/signup',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                        name:user.name,
                        phone:user.phone,
                        password:user.password,
                        cpassword:user.cpassword
        })
        })
        if(res){
            history.push('/home');
        }
        console.log(res);
    }catch(err){
     console.log(err);
    }
        
    }
    return (
        <div>
        <form class="login" >
        <input onChange={changeMe} value={user.name} name='name'  type="text" placeholder="Username" required/><br/>
        <input onChange={changeMe} value={user.phone} name='phone' type="number" placeholder="Phone No." required/><br/>
        <input onChange={changeMe} value={user.password} name='password' type="password" placeholder="Password" required/><br/>
        <input onChange={changeMe} value={user.cpassword} name='cpassword' type="password" placeholder="Confirm Password" required/><br/>
        <button onClick={saveUser}>Register</button><br/>
        <span style={{color:"white"}}>Already have an account?&nbsp;&nbsp;</span><a href='/login'>Sign In</a>
        </form>
        </div>
    )
}
