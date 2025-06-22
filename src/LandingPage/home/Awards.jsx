
import React from 'react';
function Awards() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mx-4'>
                <div className='col-lg-6 col-sm-12 text-muted'>
                    <h2>Trust with confidence</h2>
                    <div>
                        <h4>Customer-first always</h4>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    </div>
                    <div>
                        <h4>No spam or gimmicks</h4>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>

                    <div>
                        <h4>The Zerodha universe</h4>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>

                    <div>
                        <h4>Do better with money</h4>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>

                </div>
                <div className='col-lg-6 '>
                    <img src='media/images/ecosystem.png' alt='ecosystem image' className='img-fluid me-3' />
                    <div className='row text-center'>
                        <div className=" col-6"><a href="">Explore our product  → </a></div>
                        <div className="col-6"><a href="">Try Kite demo  → </a></div>
                    </div>
                </div>
            </div>
            <div className='m-5 mx-auto mt-5'>
                <img src="media/images/pressLogos.png" alt="" className='img-fluid mx-auto d-block'/>
            </div>
            <br /><br />
        </div>
    );
}




export default Awards;