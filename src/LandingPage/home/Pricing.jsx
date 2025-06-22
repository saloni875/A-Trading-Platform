
import React from 'react';
function Pricing() {
    return (
        <>
        <div className='container'>
            <div className='row  m-5 p-5 text-muted'>
                <h2 >Unbeatable pricing</h2>
                <div className='col-5 d-flex align-items-center'>
                    
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-7'>
                    <div className="row">
                        <div className="col-4 d-flex" >
                            <img src="media/images/pricingMF.svg" alt="" width={100} height={100} />
                            <p className='ms-2 mt-auto'style={{ fontSize: '0.7rem' }}> Free account <br /> opening </p>
                        </div>
                        <div className="col-4 d-flex">
                            <img src="media/images/pricingMF.svg" alt="" width={100} height={100} />
                            <p className='ms-2 mt-auto'style={{ fontSize: '0.7rem' }}> &nbsp; Free equity delivery <br /> and direct mutual funds </p>
                        </div>
                        <div className="col-4 d-flex">
                            <img src="media/images/intradayTrades.svg" alt="" width={100} height={100} />
                            <p className='ms-2 mt-auto'style={{ fontSize: '0.7rem' }}> Intraday and <br /> F&O </p>
                        </div>
                    </div>
                </div >
                <a href="">See pricing  →</a>
                <br />
            </div>
        </div>
        </>

    );
}

export default Pricing;