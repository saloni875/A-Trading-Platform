import React from 'react';
function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row p-5 text-center'>
                <h1 className='mb-3' style={{fontSize:"3rem", opacity:"0.9"}}>Zerodha Products</h1>
                <p className='text-muted mb-4' style={{fontSize:"1.3rem"}}>Sleek, modern, and intuitive trading platforms</p>
                <h6 className='text-muted  '>Check out our <a href="" style={{ textDecoration: "none" }}>investment offerings →</a></h6>
            </div>

        </div>
    );
}

export default Hero;