import {Routes, Route} from 'react-router-dom'
import './App.css';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
