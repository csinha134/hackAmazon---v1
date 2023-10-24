import React from 'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import SellForm from "./components/SellForm";
import AddProduct from './components/AddProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sellform' element={<SellForm/>}/>
          <Route path="/addproduct" element={<AddProduct />}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;