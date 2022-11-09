import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import Tabile from './Tabile';

const DetailsCardAllReview = () => {
    const {user} = useLoaderData(AuthContext)
    const [reviews, setReviews] = useState([])
    console.log(reviews);
    // console.log(user.email);

    useEffect(() =>{
        fetch(`http://localhost:5000/allReviews`)
        .then(Response => Response.json())
        .then(data =>{ 
            setReviews(data)
            
        })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
        </th>
        <th>Name And Photo</th>
        <th>Text</th>
        <th>Rating</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <h2>Review: {reviews.length}</h2>
            {
                reviews.map(review => <Tabile
                key={review._id}
                review={review}
                ></Tabile> )
            }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DetailsCardAllReview;