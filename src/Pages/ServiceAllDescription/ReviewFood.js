import React, { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const ReviewFood = ({ foodDetails }) => {
    console.log(foodDetails.title);
    const { user } = useContext(AuthContext)
   const {_id} = foodDetails
    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photoURL.value
        const rating = form.rating.value
        const foodname = form.foodName.value
        const text = form.message.value
        console.log(name, rating, text);

        const review = { 
            service: _id, 
            email,
            name,
            photo,
            rating,
            foodname,
            text,
        }
        fetch('https://home-made-food-server-saklainmostak1.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log( data);
                if(data.acknowledged){
                    toast.success('Successfully Review Add!');
                    form.reset('')
                }
            })
            .catch((error) => {
                console.error( error);
            });
    }


    return (
        <div>
            {
                user?.email ? 
                <form onSubmit={handleReview}>
                <h2 className="text-4xl">{ }</h2>
                {/* <h4 className="text-3xl">Price: $ {}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                    <input name='email' type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered input-success w-full " readOnly />
                    <input name='photoURL' type="photo" placeholder="photoURL" defaultValue={user?.photoURL} className="input input-bordered input-success w-full " readOnly />
                    <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-success w-full " required />
                    <input name='foodName' defaultValue={foodDetails?.title} type="text" placeholder="Food Name" className="input input-bordered input-success w-full " required/>
                    {/* <img className='rounded-full h-24 w-24' src={user?.photoURL} alt="" /> */}
                    
                </div>
                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Review" />
            </form>
                
                :
                <h2 className='text-3xl m-10 text-red-500'>Please Log in to add a review !!!!</h2>
               
            }
        </div>
    );
};

export default ReviewFood;