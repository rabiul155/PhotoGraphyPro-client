import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    console.log(service)
    const { _id, name, picture, price, about } = service;
    return (
        <div className='mx-auto hover:shadow-2xl hover:-translate-y-3 duration-300'>
            <div className="card card-compact w-80 rounded-lg  mx-auto  sm:w-[360px] bg-base-100 shadow-xl">
                <figure>
                    <PhotoView src={picture}>
                        <img className='h-64 hover:scale-105 duration-300' src={picture} alt="Shoes" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title uppercase">{name}</h2>
                    <p className=' text-lg'>{about.slice(0, 100)}</p>
                    <div className="card-actions justify-between pt-1">
                        <h3 className=' text-xl font-bold pt-2'>Price : {price} BDT</h3>
                        < Link to={`/services/${_id}`} className="btn btn-secondary">View Details</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;