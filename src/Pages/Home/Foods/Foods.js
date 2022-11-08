import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodDetails from './FoodDetails';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/foods')
        .then(Response => Response.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <div>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {
                        foods.map(food => <FoodDetails
                        key={food._id}
                        food={food}
                        >
                        </FoodDetails>)
                    }  
                     
                </div>
                <Link to='/services'>
                <button className="btn btn-block mt-10 mb-10">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Foods;