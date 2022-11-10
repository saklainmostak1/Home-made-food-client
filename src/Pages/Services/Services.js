import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, [])

    useTitle('Services')
    const [foods, setFoods] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/allFoods')
        .then(Response => Response.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
             
              
             
            {
                  loading ? 
                  <button className="btn loading m-10">loading</button>
                  :
                
                foods.map(food => <ServicesCard
                key={food._id}
                food={food}
                >
                </ServicesCard>)
            }
        </div>
    );
};

export default Services;