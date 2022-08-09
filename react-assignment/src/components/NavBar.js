import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import logo from '../logo.svg';
import { logout, selectUser } from '../features/userSlice';
import './NavBar.css';

const NavBar = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const clickHandler = (e) =>{
        e.preventDefault();
        dispatch(logout());
    }
    return (
    <div className="navBar"> 
        <ul>
            <li> <img src={logo} id="logo" className="App-logo" alt="logo"/> </li>
            <li id="welcome"> Welcome {user.name}! </li>
            <li id="logout-btn"> <button onClick={(e)=> clickHandler(e)}> Log out </button> </li>
        </ul>
       
    </div>);
}

export default NavBar