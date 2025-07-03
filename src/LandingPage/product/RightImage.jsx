import React from 'react';
function RightImage({
    imageURL, ProductName, productDescription, LearnMore
 }) {
    return (
        <div className='container mt-5'>
            <div className='row '>

                <div className="col-6 p-5 mt-5 " >
                    <div >
                        <h2>{ProductName}</h2>
                        <p style={{ fontSize: "20px" }}>{productDescription}</p>
                        <div>
                            <a href={LearnMore} style={{  textDecoration: "none" }}>Learn More  →</a>
                        </div>
                    </div>

                </div>
                <div className="col-6 ">
                    <img src={imageURL} alt="image" className='mx-2' />
                </div>
            </div>
            
        </div>
    );
}

export default RightImage;