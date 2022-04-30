import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import Registration from './components/Registration/Registration';
import Auth from './components/Auth/Auth';


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/registration' element={<Registration/>}/>
            </Routes>
        </div>
    );
}

export default App;
