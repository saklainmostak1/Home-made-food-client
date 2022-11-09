import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import HomeSection from '../HomeSection/HomeSection';
import SectionHome from '../SectionHome/SectionHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <HomeSection></HomeSection>
            <SectionHome></SectionHome>
        </div>
    );
};

export default Home;