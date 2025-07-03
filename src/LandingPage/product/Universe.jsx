import React from 'react';
function Universe() {
    return (
        <div className='container'>
            <div className='row text-center p-5 mt-5 fs-5 '>
                <p>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a>  blog.</p>
            </div>

            <div className='row p-5 mt-2 text-center text-muted'>
                <h2>The Zerodha Universe</h2> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <p className='fs-6'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className='p-5 text-center'>
                <div className='row '>

                    <div className="col-4 pt-3">
                        <img src="media\images\zerodhaFundhouse.png" alt="" width="160px" />
                        <p className=' text-muted' style={{fontSize: "13px"}}>our asset management venture <br /> that is creating simple and transparent index <br />funds to help you for your goals</p>
                    </div>
                    <div className="col-4 pt-3">
                        <img src="media\images\sensibullLogo.svg" alt="" width="160px" />
                        <p className=' text-muted' style={{fontSize: "13px"}}> opton teading plateform that let you <br /> create staratigy and examine <br /> data points like open interest</p>
                    </div>
                    <div className="col-4 pt-3">
                        <img src="media\images\tijori.svg" alt="" width="160px" />
                        <p className=' text-muted' style={{fontSize: "13px"}}>investment reserch platform <br /> that offer detailed insights on stocks,<br /> sector, supply chain and more</p>
                    </div>
                </div>
                <div className='row '>
                    <div className="col-4 pt-3">
                        <img src="media\images\streakLogo.png" alt="" width="160px" />
                        <p className=' text-muted' style={{fontSize: "13px"}}> systmatic trading plateform <br />  that allow you to create backset plan <br /> stratgies without any coding </p>
                    </div>
                    <div className="col-4 pt-3">
                        <img src="media\images\smallcaseLogo.png" alt="" width="160px" />
                        <p className=' text-muted' style={{fontSize: "13px"}}>Thematic investment plateform <br /> that allow you to create and diversified <br />backest of stocks on EFTs</p>
                    </div>
                    <div className="col-4 pt-3">
                        <img src="media\images\dittoLogo.png" alt="" width="160px" />
                        <p className=' text-muted' style={{fontSize: "13px"}}>personilise advice on life <br />and health insurance. No spam <br /> and no mis-seling  </p>
                    </div>


                </div> <br /><br /><br />
                    <button className='p-2 btn btn-primary fs-5' style={{width: "20%", margin:" 0 auto", fontWeight: "500"}}>Sign up for free</button>
            </div>




        </div>
    );
}

export default Universe;