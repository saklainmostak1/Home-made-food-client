import React from 'react';


const FoodDetails = ({food}) => {
    console.log(food);
    const {title, img, description } = food
    return (
    
           <div>
           <div className="card shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=" text-2xl card-title">{title}</h2>
                <p className='  font-semibold text-left'><h2 className='font-bold text-xl'>Description:</h2> {description.slice(0,100)+ '...' }</p>
            </div>
        </div>
           </div>
    );
};

export default FoodDetails;