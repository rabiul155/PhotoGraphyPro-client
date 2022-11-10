import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    const [spnning, setSpnning] = useState(true)



    return (

        <div>

            {
                services.length > 0 ?
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
                    :
                    <div className=' flex justify-center p-4'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>

            }


        </div>

    );
};

export default Services;