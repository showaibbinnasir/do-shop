import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default HomePage;