import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';
import toast from 'react-hot-toast';

const Review = () => {
    const {user} = useContext(AuthContext)
    const [reviewes, setReviewes] = useState([])
    console.log(reviewes);

    useEffect(() =>{
        fetch(`http://localhost:5000/allReviews?email=${user?.email}`)
        .then(Response => Response.json())
        .then(data => setReviewes(data))
    },[user?.email])
    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure To Delete Your Review')
        if(proceed){
            fetch(`http://localhost:5000/allReviews/${id}`, {
                method: 'DELETE'
            })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
            if(data.deletedCount > 0){
                const remaining = reviewes.filter(rev => rev._id !== id )
                setReviewes(remaining)
                toast.success('Successfully Deleted!');
            }
            })
        }
    }
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
        <th>Food Name</th>
        <th>Update</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
               reviewes.map(reviewe => <ReviewTable
               key={reviewe._id}
               reviewe={reviewe}
               handleDelete={handleDelete}
               ></ReviewTable> )
            }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Review;