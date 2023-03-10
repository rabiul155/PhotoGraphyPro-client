import React from 'react';

const Swipe = (props) => {
    const { image, location } = props.data;
    return (
        <div className="h-72">
            <figure><img className='w-96 h-60' src={image} alt="none" /></figure>
            <div className="card-body">
                <h2 className="card-title absolute bottom-2 left-0">Location : {location}</h2>
            </div>
        </div>
    );
};

export default Swipe;