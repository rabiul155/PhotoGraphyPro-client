import React from 'react';
import { toast } from 'react-hot-toast';

const BookingCard = ({ service, refetch }) => {
    console.log(service)
    const { _id, serviceName, servicePrice, status, bookingDate, serviceImg, } = service;

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete this service')
        if (confirm) {
            fetch(`https://70-assignment-server.vercel.app/deleteBooking/${id}?date=${bookingDate}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Delete successfully')
                    refetch();
                })
        }

    }

    return (
        <div className='m-4'>
            <div className=" flex flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-1/4 object-cover" src={serviceImg} alt="Card" />
                <div className="w-3/4 p-4">
                    <h2 className="text-gray-900 font-bold text-xl mb-2">ServiceName : {serviceName}</h2>
                    <h2 className="text-gray-900 font-bold text-xl mb-2">Price : {servicePrice} BDT</h2>

                    <div className="flex justify-between mt-3">
                        <div>
                            <p className="text-gray-700 text-base">Booking Date : {bookingDate}</p>
                            <p className="text-gray-700 text-base">Status : {status}</p>
                        </div>
                        <button onClick={() => handleDelete(_id)} className="px-3 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">Cancel</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingCard;