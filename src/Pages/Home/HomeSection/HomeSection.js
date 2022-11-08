import React from 'react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
    return (
        <div className='mb-24'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/1/28/0/fnd_chicken-tikka-masala-foodlets.jpg.rend.hgtvcom.476.357.suffix/1454008189186.jpeg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there welcome to my home made food website</h1>
      <p className="mb-5">Homemade food is usually prepared with natural ingredients compared to commercially prepared food. Plainly, the food has its taste however those are ready using unprocessed foods that are by no means healthy. For example: the fast foods comprises great deal of sugar, fat and sodium.</p>
     <Link to='/services'>
     <button className="btn btn-primary">Clice here See All Foods</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeSection;