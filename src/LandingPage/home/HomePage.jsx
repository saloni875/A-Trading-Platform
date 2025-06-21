

import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import OpenAcc from '../OpenAcc';

function HomePage() {
    return ( 
        <>
            <Hero/>
            <Awards/>
            <Pricing/>
            <Education/>
            <OpenAcc/>
           <div><h1>helo from home page</h1></div>
        </>
     );
}


import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAcc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Awards/>
            <Pricing/>
            <Education/>
            <OpenAcc/>
            <Footer/>
        </>
     );
}


export default HomePage;