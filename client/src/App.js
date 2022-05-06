import {Route, Routes, Navigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import Registration from './components/Registration/Registration';
import Login from "./components/Login/Login";
import {THUNK_checkAuth} from "./redux/thunk/thunkAuth";
import UserProfile from './components/UserProfile/UserProfile';
import { useSelector } from 'react-redux';



function App() {
    const isUser = useSelector(state=> state.user)
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();

    const verify = () => {
        if (THUNK_checkAuth()) {
            setLoggedIn(true);
            setUser(THUNK_checkAuth.user);
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        verify()
    }, [loggedIn]);

  if (isUser) {   
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile' element={<UserProfile/>}/>
                <Route path='*' element={<Navigate to='/' replace/>}/>
            </Routes>

        </div>
    );
  } 
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/auth' element={<Login/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/registration' element={<Registration />} />
            <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>

    </div>
);
}

export default App;
