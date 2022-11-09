import React, { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const ReviewFood = ({ foodDetails }) => {
    console.log(foodDetails);
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const rating = form.rating.value
        const text = form.message.value
        console.log(name, rating, text);

        const review = {
            name,
            email,
            rating,
            text,
        }
        fetch('http://localhost:5000/reviews', {
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
            <form onSubmit={handleReview}>
                <h2 className="text-4xl">{ }</h2>
                {/* <h4 className="text-3xl">Price: $ {}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " />
                    <input name='email' type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-success w-full " readOnly />
                    <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-success w-full " />
                    {/* <img className='rounded-full h-24 w-24' src={user?.photoURL} alt="" /> */}
                </div>
                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message"></textarea>
                <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Review" />
            </form>
        </div>
    );
};

export default ReviewFood;