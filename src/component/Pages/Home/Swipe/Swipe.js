import React from 'react';

const Swipe = (props) => {
    const { image, location } = props.data;
    return (
        <div className=" w-80 h-72  ">
            <figure><img className='w-80 h-60' src={image} alt="none" /></figure>
            <div className="card-body">
                <h2 className="card-title absolute bottom-3 left-3">Location : {location}</h2>
            </div>
        </div>
    );
};

export default Swipe;