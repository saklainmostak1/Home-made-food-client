import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewFood from './ReviewFood';



const ServiceAllDescription = () => {
    const foodDetails = useLoaderData()
    const {title, img, description, price, rating } = foodDetails
    console.log(foodDetails);
    
    return (
        <div>
        <div className="card shadow-xl m-5">
       <figure><img src={img} alt="Shoes" /></figure>
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
           <div className='mt-10 card-actions justify-center'>
          <div>
            <ReviewFood></ReviewFood>
         
          </div>
           </div>
          
       </div>
      
   </div>
   </div>
    );
};

export default ServiceAllDescription;