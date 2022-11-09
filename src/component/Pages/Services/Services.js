import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className=' flex justify-center'>
            <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 p-3 gap-5'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;