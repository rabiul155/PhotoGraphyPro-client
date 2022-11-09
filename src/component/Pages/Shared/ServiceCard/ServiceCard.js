import React from 'react';

const ServiceCard = ({ service }) => {
    console.log(service)
    const { name, picture, rating, price, about } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{about.slice(0, 100)}</p>
                    <div className="card-actions justify-between pt-1">
                        <h3 className=' text-xl font-bold pt-2'>Price :{price}</h3>
                        <button className="btn btn-secondary">Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;