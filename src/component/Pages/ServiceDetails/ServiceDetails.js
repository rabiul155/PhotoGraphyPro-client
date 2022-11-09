import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, name, picture, rating, price, about } = service;
    return (
        <div className=' flex justify-center p-4'>
            <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
                <figure><img className=' w-full' src={picture} alt="none" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className=' text-lg'>{about}</p>
                    <div className="card-actions justify-between  p-1">
                        <h3 className=' text-xl font-bold pt-2'>Price : {price}$</h3>
                        <h3 className=' text-xl font-bold pt-2'>Rating: {rating} Star</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;