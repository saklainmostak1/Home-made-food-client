import React from 'react';
import BannerDetails from './BannerDetails';

import img1 from './hom99.jpg'
import img2 from './home6.webp'
import img3 from './home88.png'
import img4 from './home10.jpg'
import './Banner.css'

const bannerData = [
    {
        image: img1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel py-10">
            
            {
                bannerData.map(bd => <BannerDetails
                key={bd.id}
                bd={bd}
                >

                </BannerDetails> )
            }
        </div>
    );
};

export default Banner;