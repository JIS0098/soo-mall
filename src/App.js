import {Routes, Route} from 'react-router-dom'
import './App.css';
import ProductAll from './page/ProductAll';
import PrivateRoute from './Route/PrivateRoute';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [authenticate,setAuthenticate] =useState(false);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>}></Route>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}></Route>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
