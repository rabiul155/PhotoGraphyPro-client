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
                <div className='tall'>
                    <PhotoView src={img1}>
                        <img src={img1} alt="" />
                    </PhotoView>

                </div>
                <div >
                    <PhotoView src={img2}>
                        <img src={img2} alt="" />
                    </PhotoView>

                </div>
                <div className='tall'>
                    <PhotoView src={img3}>
                        <img src={img3} alt="" />
                    </PhotoView>

                </div>
                <div className='tall'>
                    <PhotoView src={img4}>
                        <img src={img4} alt="" />
                    </PhotoView>

                </div>
                <div >
                    <PhotoView src={img5}>
                        <img src={img5} alt="" />
                    </PhotoView>

                </div>
                <div className='big'>
                    <PhotoView src={img6}>
                        <img src={img6} alt="" />
                    </PhotoView>

                </div>
                <div className='wide'>
                    <PhotoView src={img7} >
                        <img src={img7} alt="" />
                    </PhotoView>

                </div>
                <div className='tall'>
                    <PhotoView src={img8}>
                        <img src={img8} alt="" />
                    </PhotoView>

                </div>
                <div className='tall'>
                    <PhotoView src={img9}>
                        <img src={img9} alt="" />
                    </PhotoView>

                </div>
                <div className='big'>
                    <PhotoView src={img10}>
                        <img src={img10} alt="" />
                    </PhotoView>

                </div>
                <div >
                    <PhotoView src={img11}>
                        <img src={img11} alt="" />
                    </PhotoView>

                </div>
                <div >
                    <PhotoView src={img12} >
                        <img src={img12} alt="" />
                    </PhotoView>

                </div>

            </div>
        </div>
    );
};

export default Gallery;