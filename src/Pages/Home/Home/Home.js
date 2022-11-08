import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <HomeSection></HomeSection>
        </div>
    );
};

export default Home;