import React from 'react';
function Ticket() {
    return ( 
    <div className='container p-5'>
        
        <div className="row p-5 mt-5 mb-5">
            <h4 className='mb-3 text-muted'>To create a ticket, select a relevant topic</h4>
            <div className="col-4 mb-3">
                <h5><a href="" style={{textDecoration:"none", color:"black"}}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</a></h5><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Resident individual</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Minor</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Non Resident Indian (NRI)</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Company, Partnership, HUF and LLP</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Glossary</a><br />
            </div>
            <div className="col-4 mb-3">
                <h5><a href="" style={{textDecoration:"none" ,color:"black"}}> <i class="fa fa-user-o" aria-hidden="true"></i>Your Zerodha Account</a></h5><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account modification</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Client Master Report (CMR) and Depository <br /> Participant (DP)</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Nomination</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Transfer and conversion of securities</a><br />
            </div>
            <div className="col-4 mb-3">
                <h5><a href="" style={{textDecoration:"none", color:"black"}}><i class="fa fa-bar-chart" aria-hidden="true"></i> Kite</a></h5><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>IPO</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Trading FAQs</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Margin Trading Facility (MTF) and Margins</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Charts and orders</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Alerts and Nudges</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>General</a>
            </div>
       
            
            <div className="col-4">
                <h5><a href="" style={{textDecoration:"none", color:"black"}}><i class="fa fa-archive" aria-hidden="true"></i> Funds</a></h5><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Add money</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Withdraw money</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Add bank accounts</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>eMandates</a><br />
            </div>
            <div className="col-4">
                <h5><a href="" style={{textDecoration:"none" ,color:"black"}}> Console</a></h5><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Portfolio</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Corporate actions</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}> Funds statement</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Reports</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Profile</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Segments</a>
            </div>
            <div className="col-4">
                <h5><a href="" style={{textDecoration:"none", color:"black"}}><i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</a></h5><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Mutual funds</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>National Pension Scheme (NPS)</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Features on Coin</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Charts and orders</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Payments and Orders</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>General</a>
            </div>
        </div>
    </div> 
    );
}

export default Ticket;