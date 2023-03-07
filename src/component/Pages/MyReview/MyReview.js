import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/UserContext';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Loading/Loading';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext);

    const [review, setReview] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useTitle('MyReview')


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://70-assignment-server.vercel.app/reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                setIsLoading(false)

            })
    }, [user?.email])



    const handleDelete = (_id) => {
        const agree = window.confirm('are you sure to delete this review')
        if (agree) {

            fetch(`https://70-assignment-server.vercel.app/reviews/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = review.filter(rev => rev._id !== _id)
                    setReview(remaining);
                    toast.success('delete successfully')


                })
        }

    }

    if (isLoading) {
        return <Loading></Loading>
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