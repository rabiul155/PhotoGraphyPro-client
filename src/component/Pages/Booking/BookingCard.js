import React from 'react';
import { toast } from 'react-hot-toast';

const BookingCard = ({ service, refetch }) => {
    console.log(service)
    const { _id, serviceName, servicePrice, status, bookingDate, serviceImg, } = service;

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete this service')
        if (confirm) {
            fetch(`http://localhost:5000/deleteBooking/${id}?date=${bookingDate}`, {
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
            <div class=" flex flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-1/4 object-cover" src={serviceImg} alt="Card" />
                <div class="w-3/4 p-4">
                    <h2 class="text-gray-900 font-bold text-xl mb-2">ServiceName : {serviceName}</h2>
                    <h2 class="text-gray-900 font-bold text-xl mb-2">Price : {servicePrice}$</h2>

                    <div class="flex justify-between mt-3">
                        <div>
                            <p class="text-gray-700 text-base">Booking Date : {bookingDate}</p>
                            <p class="text-gray-700 text-base">Status : {status}</p>
                        </div>
                        <button onClick={() => handleDelete(_id)} class="px-3 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">Cancel</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingCard;