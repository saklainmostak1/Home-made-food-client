import React, { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';

const ReviewFood = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
             <form>
                <h2 className="text-4xl text-center">Review Food</h2>
                <h2 className="text-4xl">{}</h2>
                <h4 className="text-3xl">Price: $ {}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-success w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-success w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-success w-full " required/>
                    <input name='email' type="text" placeholder="Your Email"
                    defaultValue={user?.email} className="input input-bordered input-success w-full " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Bio"></textarea>
                <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Review" />
            </form>
        </div>
    );
};

export default ReviewFood;