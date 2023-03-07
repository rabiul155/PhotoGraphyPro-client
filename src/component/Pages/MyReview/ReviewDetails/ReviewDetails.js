import React from 'react';
import { Link } from 'react-router-dom';

const ReviewDetails = ({ review, handleDelete }) => {

    return (
        <div>
            <div className="card card-side flex flex-col sm:flex-row bg-base-100 shadow-xl m-4 px-6">
                <figure><img className=' w-32 rounded-full h-32' src={review?.picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Service Name : {review?.service_name}</h2>
                    <h2>Reviewer Name : {review?.name}</h2>
                    <p>Review Text :{review?.review}</p>
                    <div className="card-actions justify-end">
                        <Link to={`update/${review?._id}`}> <button className="btn btn-primary w-28">Edit</button></Link>
                        <button onClick={() => handleDelete(review._id)} className="btn btn-warning w-28">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;