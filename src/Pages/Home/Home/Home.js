import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import HomeSection from '../HomeSection/HomeSection';
import SectionHome from '../SectionHome/SectionHome';

const Home = () => {
    useTitle('Home')
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