import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import Swipe from '../Swipe/Swipe';
import 'swiper/css';
import "swiper/css/pagination";
import img1 from '../../../../images/swipe/img1.jpeg';
import img2 from '../../../../images/swipe/img2.jpeg';
import img3 from '../../../../images/swipe/img3.jpeg';
import img4 from '../../../../images/swipe/img4.jpeg';
import img5 from '../../../../images/swipe/img5.webp';
import img6 from '../../../../images/swipe/img6.jpeg';
import img7 from '../../../../images/swipe/img7.jpeg';
import img8 from '../../../../images/swipe/img8.jpeg';
import img9 from '../../../../images/swipe/img9.webp';
import img10 from '../../../../images/swipe/img10.jpeg';



const SlideShow = () => {
    return (
        <div>
            <div className=' py-5 justify-center '>
                <h2 className=' text-4xl font-bold text-center p-6 text-purple-600 uppercase'>recent work</h2>

                <div className='px-4 py-4 justify-center bg-slate-700 text-white'>
                    <Swiper
                        speed={1000}
                        grabCursor={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{

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
                        <SwiperSlide>
                            <Swipe data={{ image: img8, location: "Finland" }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img9, location: "Denmark" }}></Swipe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Swipe data={{ image: img10, location: "Bangladesh" }}></Swipe>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default SlideShow;