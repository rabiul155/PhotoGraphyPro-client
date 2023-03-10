import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/UserContext';
import Loading from '../../Loading/Loading';
import BookingCard from './BookingCard';


const Booking = () => {

    const { user } = useContext(AuthContext);

    const { data: bookig = [], isLoading, refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`https://70-assignment-server.vercel.app/myBooking?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    let serviceCost = 0;
    let totalCost = 0;
    let tax = 0;

    if (bookig) {
        for (const service of bookig) {
            serviceCost = serviceCost + parseInt(service.servicePrice);
        }
        tax = Math.round(serviceCost * 0.05)
        totalCost = tax + serviceCost;
    }

    return (
        <div className='grid grid-cols-4 gap-y-4'>
            <div className=' col-span-3'>
                {
                    bookig.map(service => <BookingCard
                        key={service._id}
                        service={service}
                        refetch={refetch}
                    ></BookingCard>)
                }

            </div>

            <div>
                <div className="flex flex-col  mr-3 mt-3 p-10 space-y-4 divide-y divide-gray-700 bg-base-200 dark:text-gray-900">
                    <h2 className="text-2xl font-semibold">Order items</h2>

                    <div className="pt-4 space-y-2">
                        <div>
                            <div className="flex justify-between">
                                <span>Total Service</span>
                                <span>{bookig?.length}</span>
                            </div>

                        </div>
                        <div className="flex justify-between">
                            <span>Service Cost</span>
                            <span>{serviceCost} BDT</span>
                        </div>
                    </div>
                    <div className="pt-4 space-y-2">
                        <div className="flex justify-between">
                            <span>Tax fee</span>
                            <span>{tax} BDT</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total Cost</span>
                                <span className="">{totalCost} BDT</span>
                            </div>
                            <button type="button" className="w-full py-2 font-semibold border rounded bg-black dark:text-gray-100 dark:border-violet-400">Go to checkout</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Booking;