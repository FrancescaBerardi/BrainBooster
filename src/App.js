import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register1 from './Register1';
import Register2 from './Register2';
import Navbar from './Navbar';
import Header from './Header';
import Cart from './Cart';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
      <Header />
        <div className="App-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register1' element={<Register1 />} />
            <Route path='/register2' element={<Register2 />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div >
      </div>

    </BrowserRouter>
  );
}

export default App;
