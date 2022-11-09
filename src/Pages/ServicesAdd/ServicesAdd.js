import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const ServicesAdd = () => {
    const {_id} = useLoaderData()
    const handleAddServices = event => {
        event.preventDefault()
        const form = event.target
        const title = form.name.value
        const img = form.photoURL.value
        const price = form.price.value
        const rating = form.Rating.value
        const description = form.description.value
        console.log(title, img, price, rating, description);

        const addFood = {
            service: _id,
            title,
            img,
            price,
            description,
            rating,
        }
        fetch('http://localhost:5000/foodAdd', {
            method: 'POST', 
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(addFood),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log( data);
                if(data.acknowledged){
                    toast.success('Successfully Service Add!');
                    form.reset('')
                }
            })
            .catch((error) => {
                console.error( error);
            })
    }
    return (
        <div className='m-10'>
            <h2 className="text-4xl text-center mb-5">Add Services</h2>
            <form onSubmit={handleAddServices}>
                {/* <h2 className="text-4xl">{}</h2>
                <h4 className="text-3xl">Price: $ {}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Services Name" className="input input-bordered input-success w-full " required />
                    <input name='photoURL' type="text" placeholder="Services PhotoURL" className="input input-bordered input-success w-full " required />
                    <input name='price' type="text" placeholder="Food Price" className="input input-bordered input-success w-full " required />
                    <input name='Rating' type="text" placeholder="Rating"
                        className="input input-bordered input-success w-full " required />
                </div>
                <textarea name='description' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Add Description"></textarea>
                <input className='btn btn-outline btn-info mb-5' type="submit" value="Add Services" />
            </form>
        </div>
    );
};

export default ServicesAdd;