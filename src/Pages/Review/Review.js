import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Review = () => {
  useTitle('My Review')
    const {user, logOut} = useContext(AuthContext)
    const [reviewes, setReviewes] = useState([])
    console.log(reviewes);

    useEffect(() =>{
        fetch(`http://localhost:5000/allReviews?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(Response => Response.json())
        .then(data =>  setReviewes(data))
    },[user?.email, logOut])
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
          {
            reviewes?.length === 0 ?  <h2 className='text-3xl m-10 text-center'>You have no review</h2>
             :
             <div className="overflow-x-auto w-full">
             <table className="table w-full">
               <thead>
                 <tr>
                   <th>
                   <label>
                       <th>Delete Review</th>
                     </label>
                   </th>
                   <th>Name And Photo</th>
                   <th>Text</th>
                   <th>Rating</th>
                   <th>Food Name</th>
                   <th>Edit Review</th>
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
           
          }
              
           
        </div>
    );
};

export default Review;