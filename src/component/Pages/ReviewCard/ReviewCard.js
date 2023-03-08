import React from 'react';


const ReviewCard = ({ reviewItem }) => {

    const { userImg, name, review, } = reviewItem
    return (

        <div className="card card-compact w-96 bg-base-100 border border-sky-500 rounded-md shadow-xl py-4">
            <figure><img src={userImg} className=' w-32 rounded-full h-32' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center ">{name}</h2>
                <p className=' text-lg'>{review}</p>

            </div>
        </div>


    );
};

export default ReviewCard;