import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';



const ServicesCard = ({food}) => {
    const [text, setText] = useState()
    const handleClick = () =>{
        setText( 'Plesase login to view details')
    }
    const {user} = useContext(AuthContext) 
    const {title, img, description, price, _id } = food
    return (
        <div>
             <div className="card shadow-xl m-5">
               
            <figure>
                
            <PhotoProvider >
                <PhotoView  src={img}>
                    <img  src={img} alt="" />
                </PhotoView>
            </PhotoProvider>  
                </figure>
            <div className="card-body">
                <h2 className=" text-2xl card-title">{title}</h2>
                <p className='  font-semibold text-left'><span className='font-bold text-xl'>Description:</span> {description.slice(0,100)+ '...' }</p>
                <div className='flex justify-between'>
                            <p>Price: {price} Tk</p>
                            
                        </div>
                <div className='mt-10 card-actions justify-center'>
                {
                            user?.uid ?
                            <Link to={`/details/${_id}`}>
                            <button className="w-64 btn btn-info ">View Details</button>
                        </Link>
                            : 
                            <div className='grid'>
                                <h2 className='text-2xl mb-5'>{text}</h2>
                                <button className="w-64 btn btn-info " onClick={handleClick}>View Details</button>
                            </div>
                            
                        }
                </div>
               
            </div>
           
        </div>
        </div>
    );
};

export default ServicesCard;