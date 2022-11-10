import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import Tabile from './Tabile';

const DetailsCardAllReview = ({ foodDetails }) => {
  console.log(foodDetails._id);
  const { _id } = foodDetails
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  console.log(reviews);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/foodReviews?service=${_id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('food-token')}`
      }
    })
      .then(Response => Response.json())
      .then(data => setReviews(data))
  }, [_id])

  return (
    <div>
      {
        reviews?.length === 0 ? <h2 className='text-3xl m-10 text-center'>This food have no review</h2> :
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
                {
                  reviews.map(review => <Tabile
                    key={review._id}
                    review={review}
                  ></Tabile>)
                }
              </tbody>
            </table>
          </div>
      }


    </div>
  );
};

export default DetailsCardAllReview;