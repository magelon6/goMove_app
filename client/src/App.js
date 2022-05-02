import {Route, Routes} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import Registration from './components/Registration/Registration';
import Login from "./components/Login/Login";
import {THUNK_checkAuth} from "./redux/thunk/thunkAuth";
import UserProfile from './components/UserProfile/UserProfile';


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();

    const verify = () => {
        if (THUNK_checkAuth()) {
            setLoggedIn(true);
            setUser(THUNK_checkAuth.user);
            console.log('logged in');
            return true;
        } else {
            console.log('not logged in');
            return false;
        }
    }

    useEffect(() => {
        verify()
    }, [loggedIn]);


    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/auth' element={<Login/>}/>
                <Route path='/profile' element={<UserProfile/>}/>
                <Route path='/registration' element={<Registration/>}/>
            </Routes>
        </div>
    );
}

export default App;
