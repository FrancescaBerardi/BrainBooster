import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Pages/Login/Login';
import Register1 from './Pages/Login/Register1';
import Register2 from './Pages/Login/Register2';
import Navbar from './Components/Layout/Navbar';
import Header from './Components/Layout/Header';
import Cart from './Cart';
import Footer from './Components/Layout/Footer';

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
          <Footer />
        </div>
      
    </BrowserRouter>


  );
}

export default App;
