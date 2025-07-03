import React from 'react';
import LeftImage from './LeftImage';
import Hero from './Hero';
import RightImage from './RightImage';
import Universe from './Universe';

function ProductPage() {
    return (
        <div>
            < Hero />
            <LeftImage 
                imageURL="media\images\kite (1).png"
                ProductName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                LearnMore=""
                googlePlay=""
                appStore=""
                 />

            <RightImage 
                imageURL="media\images\products-coin.png"
                ProductName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                LearnMore=""/>

            <LeftImage 
                imageURL="media\images\products-coin.png"
                ProductName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                LearnMore=""
                googlePlay=""
                appStore=""
                 />

                <RightImage
                imageURL="media\images\products-coin.png"
                ProductName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                LearnMore=""/>

                <LeftImage 
                imageURL="media\images\varsity.png"
                ProductName="Versity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
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