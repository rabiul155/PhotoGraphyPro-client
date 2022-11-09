import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import ReviewCard from '../ReviewCard/ReviewCard';


const ServiceDetails = () => {

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])

    const service = useLoaderData();
    const { _id, name, picture, rating, price, about } = service;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const reviewText = form.review.value;

        const review = {
            name: name,
            picture: photo,
            email: email,
            review_id: _id,
            review: reviewText
        }
        console.log(review);

    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])



    return (

        <div>
            <div className=' flex justify-center p-4'>
                <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
                    <figure><img className=' w-full' src={picture} alt="none" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className=' text-lg'>{about}</p>
                        <div className="card-actions justify-between  p-1">
                            <h3 className=' text-xl font-bold pt-2'>Price : {price}$</h3>
                            <h3 className=' text-xl font-bold pt-2'>Rating: {rating} Star</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* review section  */}

            <div className=' px-3 py-3 justify-center '>

                <div>
                    <h2 className=' text-5xl font-bold text-center p-8'>Visitors review</h2>
                    <Swiper
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                        spaceBetween={30}
                        slidesPerView={4}

                    >


                        {
                            reviews.map(review => <ReviewCard
                                key={_id}
                                reviewItem={review}
                            ></ReviewCard>)
                        }



                    </Swiper>
                </div>

            </div>



            {/* add review section */}

            {
                user?.uid || user?.email ?

                    <div>
                        <h2 className=' text-center text-4xl font-bold pt-5 '>ADD A REVIEW FOR THIS SERVICE</h2>
                        <form onSubmit={handleSubmit} >
                            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4  p-4'>
                                <div >
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Reviewer Name</span>

                                    </label>
                                    <input defaultValue={user?.displayName} name='name' type="text" placeholder="Service Name" className="input border border-sky-500 rounded w-full " required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold ">Reviewer Photo URL</span>

                                    </label>
                                    <input defaultValue={user?.photoURL} name='photo' type="text" placeholder="Photo URL" className="input border border-sky-500 rounded w-full " required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Reviewer Email</span>

                                    </label>
                                    <input defaultValue={user?.email} name='email' type="text" placeholder="Service Price" className="input border border-sky-500 rounded w-full " required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Service To Review</span>

                                    </label>
                                    <input defaultValue={_id} name='service-id' type="text" placeholder="Service Rating" className="input border border-sky-500 rounded w-full " required />
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