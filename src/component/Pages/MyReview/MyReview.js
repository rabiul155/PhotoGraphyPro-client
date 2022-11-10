import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data)
            })
    }, [user?.email])


    return (
        <div>
            {
                review?.length > 0 ?
                    <div className=' m-4'>
                        {
                            review.map(rev => <ReviewDetails
                                key={rev._id}
                                review={rev}
                            ></ReviewDetails>)
                        }
                    </div>
                    :
                    <>
                        <div className=' flex justify-center align-bottom'>
                            <h2 className=' text-5xl font-bold '>You Do Not add Any Review Please Add A Review </h2>
                        </div>

                    </>
            }


        </div>
    );
};

export default MyReview;