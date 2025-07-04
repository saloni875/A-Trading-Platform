import React from 'react';
function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row text-center p-5 mt-5 mb-5'>
                <h1>Charges</h1>
                <p className='text-muted mt-2' style={{ fontSize: "22px" }}>List of all charges and taxes</p>
            </div>

            <div className="row p-5 text-muted">
                <div className="col-4  ">
                    <img src="media\images\pricingMF.svg" alt="image" width={270} />
                    <h2 className='mb-4 fs-3'>Free equity delivery</h2>
                    <p style={{ fontSize: "1.1rem" }}>All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 ">
                    <img src="media\images\intradayTrades.svg" alt="image" width={270} />
                    <h2 className='mb-4 fs-3'>Intraday and F&O trades</h2>
                    <p style={{ fontSize: "1.1rem" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across <br />equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 ">
                    <img src="media\images\pricingMF.svg" alt="image" width={270} />
                    <h2 className='mb-4 fs-3'>Free direct MF</h2>
                    <p style={{ fontSize: "1.1rem" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>



           
            {/* <div className="" id="fo" style="display: none;">
                    <h3 className="" style="display: none;">F&amp;O</h3>
                    <div className="">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>F&amp;O - Futures</th>
                                    <th>F&amp;O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="">Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr class="grey-back">
                                    <td className="">STT/CTT</td>
                                    <td>0.02% on the sell side</td>
                                    <td>
                                        <ul className="">
                                            <li>
                                                0.0125% of the intrinsic value on options that are bought and exercised
                                            </li>
                                            <li>
                                                0.1% on sell side (on premium)
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="charges-heads">Transaction charges</td>
                                    <td>NSE: 0.00173%<br />BSE: 0</td>
                                    <td>NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr className="">
                                    <td className="">GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td className="">SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr className="">
                                    <td className="">Stamp charges</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                     <p className="text-12 color-grey">*SEBI charges will be reduced to &#8377;15 per crore once the regulator announces a date.</p> 
                </div> */}

            {/* <div className="section" id="currency" style="display: none;">
                    <h3 clasNclassName="title" style="display: none;">Currency</h3>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Currency futures</th>
                                    <th>Currency options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="charges-heads">Brokerage</td>
                                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr className="grey-back">
                                    <td className="charges-heads">STT/CTT</td>
                                    <td>No STT</td>
                                    <td>No STT</td>
                                </tr>
                                <tr>
                                    <td className="charges-heads">Transaction charges</td>
                                    <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                    <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                                </tr>
                                <tr className="grey-back">
                                    <td className="charges-heads">GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td className="charges-heads">SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr className="grey-back">
                                    <td className="charges-heads">Stamp charges</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}

            {/* <div className="section" id="commodities" style="display: none;">
                    <h3 className="" style="display: none;">Commodity</h3>
                    <div className="">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Commodity futures</th>
                                    <th>Commodity options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="charges-heads">Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr className="grey-back">
                                    <td className="charges-heads">STT/CTT</td>
                                    <td>0.01% on sell side (Non-Agri)</td>
                                    <td>0.05% on sell side</td>
                                </tr>
                                <tr>
                                    <td className="charges-heads">Transaction charges</td>
                                    <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                    <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                                </tr>
                                <tr className="grey-back">
                                    <td className="charges-heads">GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td className="charges-heads">SEBI charges</td>
                                    <td><strong>Agri:</strong><br />₹1 /
                                        crore<br /><strong>Non-agri:</strong><br />₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr className="grey-back" colspan="2">
                                    <td className="charges-heads">Stamp charges</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            <br />
            {/* <p className="text-center brokerage-link"><a className="underline" href="/brokerage-calculator">Calculate
                your costs upfront</a> using our brokerage calculator</p>
            <h2 id="charges-explained">Charges explained</h2> */}
            {/* <div className="row ">
                <div className="col-6">
                    <p>Securities/Commodities transaction tax</p>
                    <p className="">Tax by the government when transacting on the exchanges. Charged as
                        above on both buy and sell sides when trading equity delivery. Charged only on selling side when
                        trading intraday or on F&amp;O.</p>
                    <p className="">When trading at Zerodha, STT/CTT can be a lot more than the brokerage
                        we charge. Important to keep a tab.</p>
                    <p>Transaction/Turnover Charges</p>
                    <p className="">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p className="">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
                        ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p className="">BSE has revised transaction charges in SS and ST groups to ₹1,00,000
                        per crore of gross turnover.</p>
                    <p className="">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p className="">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <p>Call &amp; trade</p>
                    <p className="">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <p>Stamp charges</p>
                    <p className="">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    <p>NRI brokerage charges</p>
                    <ul className="">
                        <li>
                            ₹100 per order for futures and options.
                        </li>
                        <li>
                            For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>
                    <p>Account with debit balance</p>
                    <p className="">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <ul className="">
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                    <p>Margin Trading Facility (MTF)</p>
                    <ul className="">
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                </div>
                <div className="col-6">
                    <p>GST</p>
                    <p className="">Tax levied by the government on the services rendered. 18% of (
                        brokerage + SEBI charges + transaction charges)</p>
                    <p>SEBI Charges</p>
                    <p className="">Charged at ₹10 per crore + GST by Securities and Exchange Board of
                        India for regulating the markets.</p>
                    <p id="depo_charges">DP (Depository participant) charges</p>
                    <p className="">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p className="">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p className="">Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    <p id="depo_charges">Pledging charges</p>
                    <p className="">₹30 + GST per pledge request per ISIN.</p>
                    <p>AMC (Account maintenance charges)</p>
                    <p className="">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">Click here</a></p>
                    <p className="">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">Click here</a></p>
                    <p>Corporate action order charges</p>
                    <p className="">₹20 plus GST will be charged for OFS / buyback / takeover / delisting
                        orders placed through Console.</p>
                    <p>Off-market transfer charges</p>
                    <p className="">₹25 per transaction.</p>
                    <p>Physical CMR request</p>
                    <p className="">First CMR request is free. ₹20 + ₹100 (courier charge) +
                        18% GST for subsequent requests.</p>
                    <p>Payment gateway charges</p>
                    <p className="">₹9 + GST (Not levied on transfers done via UPI)</p>
                    <p>Delayed Payment Charges</p>
                    <p className="">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges">Learn more</a>.</p>
                    <p>Trading using 3-in-1 account with block functionality</p>
                    <ul className="">
                        <li><b>Delivery &amp; MTF Brokerage:</b> 0.5% per executed order.</li>
                        <li><b>Intraday Brokerage:</b> 0.05% per executed order.</li>
                    </ul>
                </div>
            </div> */}
            {/* <p>Disclaimer</p>
            <p class="text-12">
                For Delivery based trades, a minimum of ₹0.01 will be charged per contract note.
                Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier
                charges.
                Brokerage will not exceed the rates specified by SEBI and the exchanges.
                All statutory and regulatory charges will be levied at actuals.
                Brokerage is also charged on expired, exercised, and assigned options contracts.
                Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts,
                and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
            </p> */}
        </div>




    );
}

export default Hero;