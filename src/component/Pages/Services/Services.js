import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {


    const { data: services = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://70-assignment-server.vercel.app/services')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading ></Loading>
    }



    return (

        <div>

            <div className=' '>
                <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 p-3  gap-y-12'>

                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Services;