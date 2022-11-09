import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const updateReview = useLoaderData()
    console.log(updateReview);
    return (
        <div>
            <div>
            <h2 className='text-3xl text-center m-5'>Please Update Your Review</h2>
            <form >
                <h2 className="text-4xl">{ }</h2>
                {/* <h4 className="text-3xl">Price: $ {}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                    <input name='email' type="email"  placeholder="email" className="input input-bordered input-success w-full " readOnly />
                    <input name='photoURL' type="photo" placeholder="photoURL"  className="input input-bordered input-success w-full " readOnly />
                    <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-success w-full " required />
                    <input name='foodName'  type="text" placeholder="Food Name" className="input input-bordered input-success w-full " required/>
                    {/* <img className='rounded-full h-24 w-24' src={user?.photoURL} alt="" /> */}
                    
                </div>
                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Review" />
            </form>
        </div>
        </div>
    );
};

export default UpdateReview;