import React from 'react';
import './Gallery.css'
import img1 from '../../../../images/Gallery/1.jpg'
import img2 from '../../../../images/Gallery/2.jpg'
import img3 from '../../../../images/Gallery/3.jpg'
import img4 from '../../../../images/Gallery/4.jpg'
import img5 from '../../../../images/Gallery/5.jpg'
import img6 from '../../../../images/Gallery/6.jpg'
import img7 from '../../../../images/Gallery/7.jpg'
import img8 from '../../../../images/Gallery/8.jpg'
import img9 from '../../../../images/Gallery/9.jpg'
import img10 from '../../../../images/Gallery/10.jpg'
import img11 from '../../../../images/Gallery/11.jpg'
import img12 from '../../../../images/Gallery/12.jpg'
import { PhotoView } from 'react-photo-view';


const Gallery = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-4xl text-purple-600'>PHOTO GALLERY</h2>
            <div className='grid-wrapper p-4'>
                <div className='tall overflow-hidden'>
                    <PhotoView src={img1}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img1} alt="" />
                    </PhotoView>

                </div>
                <div className='overflow-hidden'>
                    <PhotoView src={img2}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img2} alt="" />
                    </PhotoView>

                </div>
                <div className='tall overflow-hidden'>
                    <PhotoView src={img3}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img3} alt="" />
                    </PhotoView>

                </div>
                <div className='tall overflow-hidden'>
                    <PhotoView src={img4}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img4} alt="" />
                    </PhotoView>

                </div>
                <div className='overflow-hidden'>
                    <PhotoView src={img5}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img5} alt="" />
                    </PhotoView>

                </div>
                <div className='big overflow-hidden'>
                    <PhotoView src={img6}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img6} alt="" />
                    </PhotoView>

                </div>
                <div className='wide overflow-hidden'>
                    <PhotoView src={img7} >
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img7} alt="" />
                    </PhotoView>

                </div>
                <div className='tall overflow-hidden'>
                    <PhotoView src={img8}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img8} alt="" />
                    </PhotoView>

                </div>
                <div className='tall overflow-hidden'>
                    <PhotoView src={img9}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img9} alt="" />
                    </PhotoView>

                </div>
                <div className='big overflow-hidden'>
                    <PhotoView src={img10}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img10} alt="" />
                    </PhotoView>

                </div>
                <div className='overflow-hidden'>
                    <PhotoView src={img11}>
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img11} alt="" />
                    </PhotoView>

                </div>
                <div className='overflow-hidden'>
                    <PhotoView src={img12} >
                        <img className=' hover:scale-105 duration-300 hover:brightness-50' src={img12} alt="" />
                    </PhotoView>

                </div>

            </div>
        </div>
    );
};

export default Gallery;