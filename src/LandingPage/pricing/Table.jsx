import React from 'react';

function Table() {
    return ( 
        <div className="container p-5">

             <div className=" text-center text-muted">
                    <p style={{ fontSize: "1.2rem" }} ><a href="" style={{ textDecoration: "none", color: "blue" }}>Calculate your costs upfront</a> using our brokerage calculator</p>
                </div>

                <div className='p-5'>
                    <h6>Disclaimer</h6>
                    <p style={{ fontSize: "0.8rem" }}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </div>

                <div className="nav table table-bordered text-muted p-5">
                    <h3 className='mb-4'>Charges for account opening</h3>

                    <table className="table table-bordered ">
                        <thead className=" table-borderless " style={{ fontSize: "0.9rem" }}>
                            <tr>
                                <th scope="col">Type of account</th>
                                <th scope="col">Charges</th>

                            </tr>
                        </thead>
                        <tbody className='table-borderless' style={{ fontSize: "0.8rem" }} >
                            <tr>
                                <td>Online account</td>
                                <td><button className='btn btn-success'>free</button></td>

                            </tr>
                            <tr>

                                <td>Offline account</td>
                                <td><button className='btn btn-success'>free</button></td>

                            </tr>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>₹ 500</td>

                            </tr>
                            <tr>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td> ₹ 500</td>

                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* orher table */}
                <div className=' p-5 text-muted table-bordered'>
                    <h3 className='mb-4'>Charges for optional value added services</h3>
                    <table class="table table-borderless ">
                        <thead className='table-borderless' style={{ fontSize: "0.9rem" }}>
                            <tr>
                                <th>Service</th>
                                <th>Billing Frequency</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody className='table-borderless' style={{ fontSize: "0.8rem" }}>
                            <tr>
                                <td>Tickertape</td>
                                <td>Monthly / Annual</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <td>Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td>Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: 500 | Historical: 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
     );
}

export default Table;