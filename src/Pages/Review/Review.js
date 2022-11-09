import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const Review = () => {
    const {user} = useContext(AuthContext)
    const [reviewes, setReviewes] = useState([])
    console.log(reviewes);

    useEffect(() =>{
        fetch(`http://localhost:5000/allReviews?email=${user?.email}`)
        .then(Response => Response.json())
        .then(data => setReviewes(data))
    },[user?.email])
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
        {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <th>Name And Photo</th>
        <th>Text</th>
        <th>Rating</th>
        <th>Edit</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
               reviewes.map(reviewe => <ReviewTable
               key={reviewe._id}
               reviewe={reviewe}
               ></ReviewTable> )
            }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Review;