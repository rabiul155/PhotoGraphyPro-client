import React from 'react';


const ReviewCard = ({ reviewItem }) => {
    console.log(reviewItem);

    const { userImg, name, review } = reviewItem
    return (

        <div className="w-3/4 bg-base-100 border border-sky-500 rounded-md shadow-xl p-4">

            <div className=' flex items-center gap-4'>
                <figure><img src={userImg} className=' w-14 rounded-full h-14' alt="reviewer" /></figure>
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{reviewItem?.date}</p>
                </div>
            </div>

            <p className=' text-lg'>{review}</p>


        </div>


    );
};

export default ReviewCard;