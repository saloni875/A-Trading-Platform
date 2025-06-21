
import React from 'react';
function Hero() {
    return ( 
        
        <div className='container m-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width: "20%", margin:" 0 auto", fontWeight: "500"}}>Sign up for free</button>
            </div>
            <br /><br /><br />
        </div>
     );
}

export default Hero;