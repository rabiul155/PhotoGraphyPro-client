import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import ReviewCard from '../ReviewCard/ReviewCard';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { HiStar } from "react-icons/hi";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';





const ServiceDetails = () => {

    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const [booking, setBooking] = useState(null)
    const [startDate, setStartDate] = useState(null);



    const { _id, name, picture, rating, price, about } = service;

    let countStar = [];

    for (let i = 1; i <= parseInt(rating); i++) {
        countStar.push(i)
    }

    // Sent booking information to server 

    const handleConfirmBooking = event => {
        event.preventDefault();
        const form = event.target;
        const serviceImg = picture;
        const serviceName = name;
        const servicePrice = price;
        const serviceId = _id;
        const consumerImg = user?.photoURL;
        const consumerName = user?.displayName;
        const consumerEmail = user?.email;
        const status = "In progress";
        const bookingDate = startDate.toLocaleDateString();
        const location = form.location.value;
        const phone = form.phone.value;

        const bookingBox = {
            serviceImg, serviceName, servicePrice, serviceId, consumerEmail, consumerImg, consumerName, status, bookingDate, location, phone
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingBox)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.message) {
                    toast.error(data.message)
                }
                else if (data?.acknowledged) {
                    toast.success("Booking confirm")
                }

            })
        setBooking(null)

    }



    // Get reviews from server 
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reviews?review_id=${_id}`)
            const data = await res.json()
            return data;
        }
    })

    // Send review to server 
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;

        const email = user?.email;
        const reviewText = form.review.value;

        const review = {
            userImg: user.photoURL,
            name: userName,
            picture: picture,
            email: email,
            review_id: _id,
            review: reviewText,
            service_name: name
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                toast.success('review added')
                refetch();
            })
            .catch(error => console.error('add review data error', error))

    }

    const handleBooking = () => {
        if (user?.uid) {
            setBooking(service)

        }
        else {
            toast.success('Please Login first')
        }
    }




    return (

        <div>
            <div className=' flex justify-center p-4'>
                <div className="card card-compact md:w-1/2 bg-base-100 shadow-xl">
                    <figure><img className=' w-full' src={picture} alt="none" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase">{name}</h2>
                        <p className=' text-lg'>{about}</p>
                        <div className="lg:flex justify-between items-end">
                            <div className='flex lg:block justify-between mb-3 lg:mb-0'>
                                <h3 className=' text-xl font-bold mr-2 '>Price : {price}$</h3>
                                <h3 className=' text-xl font-bold '>Rating :
                                    {
                                        countStar.map(star => <HiStar size={28} className=' inline-block text-yellow-400' key={star}></HiStar>)
                                    }
                                </h3>
                            </div>
                            <div>
                                <label onClick={handleBooking} htmlFor="my-modal" className='btn btn-primary  w-full lg:w-44'>Booking</label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal section  */}

            {
                booking &&
                <form onSubmit={handleConfirmBooking}>
                    <input type="checkbox" id="my-modal" className="modal-toggle " />
                    <div className="modal ">
                        <div className="modal-box relative ">
                            <label onClick={() => setBooking(null)} htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h2 className='text-3xl font-bold text-center text-green-600'>Confirmation Form</h2>
                            <div className="form-control w-full">
                                <label className="label">Service Name</label>
                                <input defaultValue={name} type="text" className="input input-primary input-bordered w-full " />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">Service Price</label>
                                <input defaultValue={price} type="text" className="input input-primary input-bordered w-full " />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">Booking Date</label>
                                <DatePicker required
                                    className='w-full block h-12 text-gray-900 input-primary border border-primary rounded-lg px-3'
                                    showIcon
                                    minDate={new Date()}
                                    selected={startDate}
                                    dateFormat="dd/MM/yyyy"
                                    onChange={(date) => setStartDate(date)}
                                />
                            </div >
                            <div className="form-control my-3 w-full">
                                <input name='location' required placeholder='Enter your location here' type="text" className="input input-primary input-bordered w-full " />
                            </div >

                            <div className="form-control my-3 w-full">
                                <input name='phone' placeholder='Enter your phone number here' required type="text" className="input input-primary input-bordered w-full " />
                            </div>
                            <button type='submit' className='btn btn-primary w-full '>Confirm Booking</button>
                        </div>
                    </div>
                </form>
            }

            {/* review section  */}

            <div className=' px-3 py-3 justify-center '>
                <h2 className=' text-5xl font-bold text-center p-8'>Visitors review</h2>
                <div className=' flex flex-wrap justify-center gap-4'>


                    {

                        reviews.map(review => <ReviewCard
                            key={review._id}
                            reviewItem={review}
                        ></ReviewCard>)
                    }


                </div>

            </div>



            {/* add review section */}

            {
                user?.uid || user?.email ?

                    <div className=' w-3/4 mx-auto'>
                        <h2 className=' text-center text-4xl font-bold pt-5 '>ADD A REVIEW FOR THIS SERVICE</h2>
                        <form onSubmit={handleSubmit} >
                            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4  p-4'>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Service To Review</span>

                                    </label>
                                    <input defaultValue={name} name='service-id' type="text" placeholder="Service Rating" className="input border border-sky-500 rounded w-full " required />
                                </div>
                                <div >
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Reviewer Name</span>

                                    </label>
                                    <input defaultValue={user?.displayName} name='name' type="text" placeholder="Service Name" className="input border border-sky-500 rounded w-full " required />
                                </div>

                            </div>

                            <div className=' px-4'>
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Add Your Review Here</span>
                                </label>
                                <textarea name='review' className="textarea border border-sky-500 rounded w-full" placeholder="add your review here" required></textarea>
                            </div>


                            <div className=' flex justify-center m-6'>
                                <button type='submit' className="btn btn-warning w-48 ">ADD Your Review </button>
                            </div>
                        </form>
                    </div>

                    :

                    <>
                        <h3 className=' text-3xl font-bold text-center p-14'> Please <Link to='/login' className=' text-blue-700 underline'>LogIn</Link> To Add Review</h3>
                    </>
            }




        </div>
    );
};

export default ServiceDetails;