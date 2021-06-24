import {React,useState} from 'react';
import {useHistory} from 'react-router-dom';
export const Login = () => {
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",
        password:""
    });
    const changeMe=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const loged= async (e)=>{
        e.preventDefault();
        try {
            const res= await fetch('/login',{
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                        name:user.name,
                        password:user.password,
            })
        })
        if(res.status===200){
            window.localStorage.setItem("name",user.name);
            history.push('/home');
        }
            
        else
        alert("Some Error Occured");
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
        <form class="login">
        <input name="name" value={user.name} onChange={changeMe} type="text" required placeholder="Username"/><br/>
        <input name="password" value={user.password} onChange={changeMe} type="password" required placeholder="Password"/><br/>
        <button onClick={loged}>Login</button><br/>
        <span style={{color:"white"}}>Do not have a account?&nbsp;&nbsp;</span><a href='/signup'>Sign Up</a>
        </form>
        </div>
    )
}
