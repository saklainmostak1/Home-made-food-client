import React from 'react';

const ReviewTable = ({ reviewe, handleDelete }) => {
    const { _id , name, rating, text, photo, foodname } = reviewe
    console.log(reviewe);
   
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id) } className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{}</div>
                    </div>
                </div>
            </td>
            <td>
                {text}
            </td>
            <td>{rating}</td>
            <th>
                {foodname }
            </th>
        </tr>



    );
};

export default ReviewTable;