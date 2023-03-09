import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const MyServices = () => {
    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/services`)
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete this service')
        if (confirm) {
            fetch(`http://localhost:5000/deleteService/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refetch();
                    toast.success('Service Deleted Successfully')
                })
        }
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>Picture</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            services.map((service, index) => <tr className='p-0 font-semibold'
                                key={service._id}
                            >

                                <td>
                                    <div className="">
                                        <div className="w-20 rounded">
                                            <img src={service.picture} alt='none' />
                                        </div>
                                    </div>
                                </td>
                                <td>{service.name}</td>
                                <td>{service.price}$</td>
                                <td className=''>{service.rating}</td>
                                <td><button onClick={() => handleDelete(service._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyServices;