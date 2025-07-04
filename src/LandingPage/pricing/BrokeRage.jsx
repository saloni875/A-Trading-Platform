import React from 'react';
function BrokeRage() {
    return (

        <div className="container  mt-2">
            <div className="nav table table-bordered text-muted p-5">
                <nav className="nav nav-tabs">
                    <h3><a className="nav-link active" href="#tab-equities" >Equity</a></h3>
                    <h3><a className="nav-link" href="#tab-currency" data-id="currency">Currency</a></h3>
                    <h3><a className="nav-link" href="#tab-commodities" data-id="commodities">Commodity</a></h3>
                </nav>


                <table className='table table-borderless '>
                    <thead className='text-muted' style={{ fontSize: "14px" }}>
                        <tr>
                            <th>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>Equity delivery</th>
                            <th>Equity intraday</th>
                            <th className="">F&amp;O - Futures</th>
                            <th className="">F&amp;O - Options</th>
                        </tr>
                    </thead>
                    <tbody className='table-borderless ' style={{ fontSize: "0.8rem" }}>
                        <tr>
                            <td className="fs-6">Brokerage</td>
                            <td>Zero Brokerage</td>
                            <td>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="hide-on-mobile">0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="hide-on-mobile">Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr className="">
                            <td className="charges-heads">STT/CTT</td>
                            <td>0.1% on buy &amp; sell</td>
                            <td>0.025% on the sell side</td>
                            <td className="hide-on-mobile">0.02% on the sell side</td>
                            <td className="hide-on-mobile">
                                <ul className="">
                                    <li>
                                        0.125% of the intrinsic value on options that are bought and exercised
                                    </li>
                                    <li>
                                        0.1% on sell side (on premium)
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="charges-heads">Transaction charges</td>
                            <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                            <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                            <td className="hide-on-mobile">NSE: 0.00173%<br />BSE: 0</td>
                            <td className="hide-on-mobile">NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                        </tr>
                        <tr className="">
                            <td className="charges-heads">GST</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td className="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td className="hide-on-mobile">18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td className="charges-heads">SEBI charges</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                            <td className="hide-on-mobile">₹10 / crore</td>
                            <td className="hide-on-mobile">₹10 / crore</td>
                        </tr>
                        <tr className="">
                            <td className="">Stamp charges</td>
                            <td>0.015% or ₹1500 / crore on buy side</td>
                            <td>0.003% or ₹300 / crore on buy side</td>
                            <td className="">0.002% or ₹200 / crore on buy side</td>
                            <td className="">0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>


               



            </div>
        </div>
    );
}

export default BrokeRage;