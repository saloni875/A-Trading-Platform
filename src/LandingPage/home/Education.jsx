
import React from 'react';
function Education() {
  return (


    <div className="row m-5 mt-5 d-flex">
      <div className="col-6">

        <img className="" src="media/images/index-education.svg" />

      </div>
      <div className="col-6 p-3">
        <h2 className=''>Free and open market education</h2>
        <p style={{ lineHeight: '2' }}>
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
      
        <a href="">Varsity <i className="icon-arrow-right"></i></a>
        <br /><br /><br />
        <p style={{ lineHeight: '2' }}>
          TradingQ&amp;A, the most active trading and investment community in
          India for all your market related queries.
        </p>
      
        <a href="">TradingQ&amp;A <i className="icon-arrow-right"></i></a>
      </div>
      <br /><br /><br />
    </div>
  );
}

export default Education;