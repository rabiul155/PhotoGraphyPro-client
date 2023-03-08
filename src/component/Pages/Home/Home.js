import React, { useEffect, useState } from 'react';
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import Swipe from './Swipe/Swipe';
import img1 from '../../../images/swipe/img1.jpeg';
import img2 from '../../../images/swipe/img2.jpeg';
import img3 from '../../../images/swipe/img3.jpeg';
import img4 from '../../../images/swipe/img4.jpeg';
import img5 from '../../../images/swipe/img5.webp';
import img6 from '../../../images/swipe/img6.jpeg';
import img7 from '../../../images/swipe/img7.jpeg';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import pro from '../../../images/pro.jpg'
import useTitle from '../../../hooks/useTitle';


const Home = () => {

    const [services, setServices] = useState([])
    useTitle('Home')

    useEffect(() => {
        fetch('http://localhost:5000/home-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>

            {/*.......... banner section ...........*/}

            <div className='banner text-white'>
                <div className='sm:absolute top-32 left-28 p-6'>
                    <div >
                        <h5 className=' sm:text-xl font-bold '> PHOTOGRAFER GUIDE</h5>
                        <h2 className=' sm:text-5xl text-xl font-bold mt-2 py-3'>
                            Hire an amazing <br />
                            local photographer <br />
                            anywhere in the world
                        </h2>

                        <p className=' sm:text-lg mt-3'>Looking for professional photographers to work with? <br /> You came to the right place. On Fiverr, you can easily <br /> find top photographers for any job necessary</p>
                        <div className=' mt-3'>
                            <button className="btn w-32  btn-active btn-accent text-white mr-6">Hire Me</button>
                            <button className="btn btn-outline btn-warning">Pre Booking</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* .................services section .............. */}

            <div className=' flex justify-center pt-6'>
                <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>

            <div className=' flex justify-center m-4'>
                <Link to='/services' className="btn btn-active btn-warning px-12">SEE ALL</Link>
            </div>

            {/*............ my work section ............. */}


            <div className=' py-5 justify-center '>
                <h2 className=' text-4xl font-bold text-center p-6'>My work</h2>

                <div className='px-4 py-4 justify-center bg-slate-700 text-white'>
                    <Swiper
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            }
                        }}

                    >
                        <SwiperSlide>
                            <Swipe data={{ image: img1, location: 'Alabama' }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img2, location: "Africa" }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img3, location: "Sahara" }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img4, location: "Desart " }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img5, location: "India" }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img6, location: "GreenLand" }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img7, location: "Peru" }}></Swipe>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>

            {/* about Me section  */}

            <div className=' bg-stone-800'>
                <div className=' flex justify-around flex-col-reverse sm:flex-row sm:w-3/4 text-white m-auto p-8'>
                    <div className='sm:w-1/2 pt-7 sm:pt-0'>
                        <h2 className=' text-4xl font-bold sm:text-left text-center'> About Me </h2>
                        <p className=' text-lg font-bold'>Photography is my hobby.
                            I have join this profession before 5 years and this long time i capture more than thousent of pictule. I love nature so I used to take picture of nature. I try my best to get a perfect picture. Sometime I have to wait a lont time to take a perfect picture.I visited more thank 20 countries to take picture of nature. Different countiries had different nature. So I have to change my apporach to take perfect picture.When I get the perfect shoot then I edit the picture and send it to a journal. I have written many artile about photography which is effective for capture perfect picture.At last I would say I love my profession. </p>

                    </div>
                    <div className=''>
                        <img className='w-80 h-80 sm:w-96 sm:h-96 rounded-full' src={pro} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;