import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Pages/Login/Login';
import Register1 from './Pages/Login/Register1';
import Register2 from './Pages/Login/Register2';
import Cart from './Cart';
import ProductDetails from './Components/ProductDetails';
import SviluppoIT from './SviluppoIT';
import Design from './Design';
import Lingue from './Lingue';
import SoftSkills from './SoftSkills';

function App() {

  return (

    <BrowserRouter>
      
        <div className="App">
          
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register1' element={<Register1 />} />
              <Route path='/register2' element={<Register2 />} />
              <Route path='/product-details' element={<ProductDetails />} />
              <Route path='/sviluppo' element={<SviluppoIT />} />
              <Route path='/design' element={<Design />} />
              <Route path='/lingue' element={<Lingue />} />
              <Route path='/soft-skills' element={<SoftSkills />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          
        </div>
      
    </BrowserRouter>


  );
}

export default App;
