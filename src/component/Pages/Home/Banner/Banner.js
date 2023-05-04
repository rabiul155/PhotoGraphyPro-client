import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Banner.css'

const Banner = () => {
    return (
        <div>
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
                            <HashLink smooth to="#contuctMe">    <button className="btn w-32  btn-active btn-accent text-white mr-6">Contuct Me</button></HashLink>
                            <button className="btn btn-outline btn-warning">Pre Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;