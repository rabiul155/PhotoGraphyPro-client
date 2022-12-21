import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';
import useTitle from '../../../hooks/useTitle';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])
    useTitle('MyReview')


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data)
            })
    }, [user?.email])


    const handleDelete = (_id) => {
        const agree = window.confirm('are you sure to delete this review')
        if (agree) {
            console.log(_id)
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = review.filter(rev => rev._id !== _id)
                    setReview(remaining);
                    console.log(data)
                    toast.success('delete successfully')

                })
        }

    }

    return (


        <div>
            {
                review?.length > 0 ?
                    <div className=' m-4'>
                        {
                            review.map(rev => <ReviewDetails
                                key={rev._id}
                                review={rev}
                                handleDelete={handleDelete}
                            ></ReviewDetails>)
                        }
                    </div>
                    :
                    <>
                        <div className=' flex justify-center align-middle '>
                            <h2 className=' text-5xl font-bold h-7'>You Do Not add Any Review Please Add A Review </h2>
                        </div>

                    </>
            }


        </div>
    );
};

export default MyReview;