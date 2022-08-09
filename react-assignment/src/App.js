import './App.css';
import React from 'react';
import Login from './components/Login'
import Home from './components/Home';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const App = () =>{
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <Home/>: <Login/>}
    </div>
  );
}

export default App;
