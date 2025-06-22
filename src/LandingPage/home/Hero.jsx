
import React from 'react';
function Hero() {
    return ( 
        
        <div className='container '>
            <div className='row text-center m-5 p-5'>
                <img src='media/images/homeHero.png' alt='hero image' className='mb-5'/>
                <h1 className='mt-5 text-muted'>Invest in everything</h1>
                <p className='fs-4 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width: "20%", margin:" 0 auto", fontWeight: "500"}}>Sign up for free</button>
            </div>
            <br /><br /><br />
        </div>
     );
}

export default Hero;