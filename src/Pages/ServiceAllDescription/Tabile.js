import React from 'react';

const Tabile = ({review}) => {

    // console.log(review);
    const { name, rating, text, photo } = review
    console.log(photo);
    return (
        <>
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
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
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
         {text}
        </td>
        <td>{rating}</td>
      </tr> 
        </>
    );
};

export default Tabile;