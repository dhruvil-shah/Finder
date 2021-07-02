import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
export const Signout =() => {
    const history=useHistory();
    localStorage.removeItem("name");  
    useEffect(async()=>{
        try {
        const api=await fetch('/signout',{
        method:"GET"
    })
    if(api.status==200){
        history.push('/login');
    }else
    alert("Some error occured ");
   }
    catch (error) {
    console.log(error);         
    }
    },[])

    return (
        <div>
            Hello from Signout
        </div>
    )
}
