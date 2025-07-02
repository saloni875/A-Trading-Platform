import React from 'react';
import LeftImage from './LeftImage';
import Hero from './Hero';
import RightImage from './RightImage';
import Universe from './Universe';

function ProductPage() {
    return (
        <div>
            < Hero />
            <LeftImage imageURL="media\images\kite (1).png"
                ProductName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                LearnMore=""
                googlePlay=""
                appStore=""
                 />
            <RightImage />
            <LeftImage imageURL=""
                ProductName=""
                productDescription=""
                tryDemo=""
                LearnMore=""
                googlePlay=""
                appStore=""
                 />
                <RightImage/>
                <LeftImage imageURL=""
                ProductName=""
                productDescription=""
                tryDemo=""
                LearnMore=""
                googlePlay=""
                appStore=""
                 />
                
                <Universe />


        </div>
    );
}

export default ProductPage;