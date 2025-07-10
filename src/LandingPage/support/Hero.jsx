import React from 'react';
function Hero() {
    return (
        <div className='container-fulid p-5' id='support-sec' >
            <div className='d-flex justify-content-between' style={{padding:"0 2.5rem"}}>
                <h5 className='m'>Support Portal</h5>
            <a href="">Track tickets</a>
            </div>
            <div className="row p-5 mt-5 mb-5"  >
                <div className="col-7 " style={{lineHeight:"2"}}>
                    
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input type="text" placeholder='Eg: How do i activate F&Q , Why my order is getting rejected ...' style={{height:"60px", width:"500px", padding:"0.5rem"}}/><br />
                    <a href="">Track account opening </a> &nbsp; &nbsp; &nbsp; <a href="">Track segment activation</a>&nbsp; &nbsp; &nbsp;<a href=""> Intraday margins</a>&nbsp; &nbsp; &nbsp;<a href="">Kite user manual</a>
                </div>
                <div className="col-5" style={{ lineHeight:"2"}}>
                    

                    <h5>Featured</h5>
                    <ol style={{ textDecoration: 'underline'}}>

                        <li>Quarterly Settlement of Funds - July 2025</li>
                        <li>Exclusion of F&O contracts on 8 securities from August 29, 2025</li>
                    </ol>
                </div>

            </div>
        </div>
    );
}

export default Hero;