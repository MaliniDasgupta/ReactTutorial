import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../features/userSlice';
import "./Login.css";

const Login = () =>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

   const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(login({
        name: name,
        password: password,
        loggedIn: true,
    }));
   }
    return (
        <div className="login"> 
            <form className="login-form" onSubmit={(e) => submitHandler(e)}>
                <h1> Login </h1>
                <input type="text" id="username" placeholder="username" value={name} onChange={(e) => setName(e.target.value)} required></input>
                <br></br>
                <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <br></br>
                <button type="submit"> login </button>
            </form>
            
        </div>
    )
}
export default Login