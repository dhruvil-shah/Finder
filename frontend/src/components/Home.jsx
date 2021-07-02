import React from 'react';
import {useHistory} from 'react-router-dom';
import '../App.css'
export const Home = () => {
    const history=useHistory();
    const toCreate=()=>{
        history.push('/create');
    }
    const toJoin=()=>{
       history.push('/join');   
    }
    // window.location.reload(true);
    return (
        <div className='home'>
            <p>Hello from Home</p>
            <button onClick={toCreate} className='home-btn'>Create Room</button>
            <button onClick={toJoin} className='home-btn'>Join Room</button>
        </div>
    )
}
