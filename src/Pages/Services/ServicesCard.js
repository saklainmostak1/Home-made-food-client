import React from 'react';

const ServicesCard = ({food}) => {
    const {title, img, description } = food
    return (
        <div>
             <div className="card shadow-xl m-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=" text-2xl card-title">{title}</h2>
                <p className='  font-semibold text-left'><h2 className='font-bold text-xl'>Description:</h2> {description}</p>
            </div>
        </div>
        </div>
    );
};

export default ServicesCard;