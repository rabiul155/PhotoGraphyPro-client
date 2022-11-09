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
import img8 from '../../../images/swipe/img8.jpeg';
import img9 from '../../../images/swipe/img9.webp';
import img10 from '../../../images/swipe/img10.jpeg';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';


const Home = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/home-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>

            {/*.......... banner section ...........*/}

            <div className='banner text-white'>
                <div className='absolute top-32 left-28'>
                    <div >
                        <h5 className=' text-xl font-bold '> PHOTOGRAFER GUIDE</h5>
                        <h2 className=' text-5xl font-bold mt-2 py-3'>
                            Hire an amazing <br />
                            local photographer <br />
                            anywhere in the world
                        </h2>

                        <p className=' text-lg mt-3'>Looking for professional photographers to work with? <br /> You came to the right place. On Fiverr, you can easily <br /> find top photographers for any job necessary</p>
                        <div className=' mt-3'>
                            <button className="btn w-32  btn-active btn-accent text-white mr-6">Hire Me</button>
                            <button className="btn btn-outline btn-warning">Pre Booking</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* .................services section .............. */}

            <div className=' grid grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className=' flex justify-center m-4'>
                <Link to='/services' className="btn btn-active btn-primary">Button</Link>
            </div>

            {/*............ my work section ............. */}
            <div className=' px-3 py-3 justify-center '>

                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                    spaceBetween={30}
                    slidesPerView={4}

                >
                    <SwiperSlide>
                        <Swipe data={{ image: img1 }}></Swipe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe data={{ image: img2 }}></Swipe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe data={{ image: img3 }}></Swipe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe data={{ image: img4 }}></Swipe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe data={{ image: img5 }}></Swipe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe data={{ image: img6 }}></Swipe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swipe data={{ image: img7 }}></Swipe>
                    </SwiperSlide>




                </Swiper>

            </div>


        </div>
    );
};

export default Home;