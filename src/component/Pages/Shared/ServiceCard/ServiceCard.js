import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    console.log(service)
    const { _id, name, picture, price, about } = service;
    return (
        <div>
            <div className="card card-compact w-80  sm:mx-0 mx-auto sm:w-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoView src={picture}>
                        <img className='h-64' src={picture} alt="Shoes" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title uppercase">{name}</h2>
                    <p className=' text-lg'>{about.slice(0, 100)}</p>
                    <div className="card-actions justify-between pt-1">
                        <h3 className=' text-xl font-bold pt-2'>Price :{price}$</h3>
                        < Link to={`/services/${_id}`} className="btn btn-secondary">View Details</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;