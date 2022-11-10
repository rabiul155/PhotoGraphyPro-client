import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])
    const { email } = user;
    console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data)
            })
    }, [email])


    return (
        <div>
            <div className=' m-4'>
                {
                    review.map(rev => <ReviewDetails
                        key={rev._id}
                        review={rev}
                    ></ReviewDetails>)
                }
            </div>

        </div>
    );
};

export default MyReview;