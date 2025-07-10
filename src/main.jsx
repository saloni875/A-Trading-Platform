import { StrictMode } from 'react'
import './index.css';
import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './LandingPage/home/HomePage.jsx';
import Pricing from './LandingPage/pricing/PricingPage.jsx';
import Support from './LandingPage/support/SupportPage.jsx';
import Signup from './LandingPage/signup/SignUp.jsx';
import Product from './LandingPage/product/ProductPage.jsx';
import About from './LandingPage/about/AboutPage.jsx';
import Navbar from './LandingPage/Navbar.jsx';
import Footer from './LandingPage/Footer.jsx';
import Notfound from './LandingPage/Notfound.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/support' element={<Support />} />
      <Route path='/product' element={<Product />} /> */}
      {/* <Route path='*' element={Notfound} /> */}
    </Routes>
    <Footer/>
  </BrowserRouter>
  </StrictMode>

)
