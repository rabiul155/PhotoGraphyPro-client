import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const review = useLoaderData();
    console.log(review);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const reviewUpdate = form.review.value;
        console.log(reviewUpdate);
        const message = {
            reviewUpdate
        }



        fetch(`https://70-assignment-server.vercel.app/reviews/${review?._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(message),

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                toast.success('review updated')
                form.reset();
            })


    }


    return (
        <div>
            <h2 className=' text-3xl font-bold text-center p-8'>Update Your Review</h2>
            <form onSubmit={handleUpdate} >
                <div className=' px-4 w-3/4 mx-auto'>
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Update Your review</span>

                    </label>
                    <textarea defaultValue={review?.review} name='review' className="textarea border  border-sky-500 rounded w-full" placeholder="update your review" required></textarea>
                </div>
                <div className=' flex justify-center m-6'>
                    <button type='submit' className="btn btn-warning w-48 ">Update </button>
                </div>
            </form>
        </div>
    );
};

export default Update;