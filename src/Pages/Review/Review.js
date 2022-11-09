import React, { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';

const Review = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h2>Review</h2>
        </div>
    );
};

export default Review;