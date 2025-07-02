import React from 'react';
function LeftImage({
    imageURL, ProductName, productDescription, tryDemo, LearnMore, googlePlay, appStore
}) {
    return (

        <div className='container mt-5'>
            <div className='row '>
                <div className="col-6 ">
                    <img src={imageURL} alt="image" className='mx-2' />
                </div>
                <div className="col-6 p-5 mt-5 " >
                    <div style={{paddingLeft: "90px"}}>
                        <h1>{ProductName}</h1>
                    <p style={{fontSize:"18px"}}>{productDescription}</p>
                    <div className=''>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo → </a> 
                        <a href={LearnMore} style={{marginLeft :"50px", textDecoration:"none"}}>Learn More  →</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt="" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={appStore}><img src="media\images\appstoreBadge.svg" alt="" /></a>
                    </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default LeftImage;