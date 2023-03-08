import { async } from '@firebase/util';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const CustomerOrder = () => {

    const { data: customerOrders = [], isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/customerOrder')
            const data = await res.json()
            return data;
        }

    })

    console.log(customerOrders)

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className=' text-4xl font-bold text-center text-green-500 mb-3'> Order Summery</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Customer</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Service </th>
                            <th>BookinDate </th>


                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            customerOrders.map(order =>
                                <tr key={order._id}>

                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 p-0 rounded-full">
                                                <img src={order.consumerImg} alt="Avatar-component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{order.consumerName}</td>
                                    <td>{order.location}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.serviceName}</td>
                                    <td>{order.bookingDate}</td>
                                    <td>{order.status}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CustomerOrder;