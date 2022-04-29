import { Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Registration from './components/Registration/Registration';
import Auth from './components/Auth/Auth';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NavBar />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;