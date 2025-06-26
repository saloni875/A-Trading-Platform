import React from 'react';
function Team() {
    return (
        <div className='container'>
            <div className="row">
                <h2 className='fs-2 d-flex justify-content-center align-items-center text-muted'>People</h2>
            </div>
            <div className="row p-5 ">
                <div className="col-6 pt-5 text-center text-muted">
                    <img src="media/images/nithinKamath.jpg" alt="photo" style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 className='mt-4'>Nithin Kamath</h4>
                    <h6 className='mt-4'>Founder, CEO</h6>
                </div>
                <div className="col-6 p-4 text-muted" style={{fontSize:"1.1rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;