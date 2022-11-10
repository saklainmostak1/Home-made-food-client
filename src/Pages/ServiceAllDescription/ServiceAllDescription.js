import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewFood from './ReviewFood';
import DetailsCardAllReview from './DetailsCardAllReview';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServiceAllDescription = () => {
    useTitle('Details')
    const foodDetails = useLoaderData()
    const {title, img, description, price, rating } = foodDetails
    console.log(foodDetails);
    
    return (
        <div>
        <div className="card shadow-xl m-5">
       <figure>
       <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
        </figure>
       <div className="card-body">
           <h2 className=" text-2xl card-title">{title}</h2>
           <p className='  font-semibold text-left'><span className='font-bold text-xl'>Description:</span> {description}</p>
           <div className='flex justify-between'>
                       <p>Price: {price}</p>
                       <div className='flex'>
                           <FaStar></FaStar>
                           <p className='ml-2'>{rating}</p>
                       </div>
                   </div>
                   <div>
                   <h2 className="text-4xl text-center mb-5">Show All Review Of {title} </h2>
                    <DetailsCardAllReview
                   key = {foodDetails._id}
                    foodDetails={foodDetails}
                    ></DetailsCardAllReview>
                   </div>
           <div className='mt-10 card-actions justify-center'>
          <div>
          <h2 className="text-4xl text-center mb-5">Add Review For {title} </h2>
            <ReviewFood
            key={foodDetails._id}
            foodDetails={foodDetails}
            ></ReviewFood>
          </div>
           </div>
          
       </div>
      
   </div>
   </div>
    );
};

export default ServiceAllDescription;