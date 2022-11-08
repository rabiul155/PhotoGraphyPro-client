import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>

            <div className=' banner text-white'>

                <div className=' relative top-32 left-28'>
                    <div className=''>
                        <h5 className=' text-xl font-bold '> PHOTOGRAFER GUIDE</h5>
                        <h2 className=' text-5xl font-bold mt-3 py-3'>
                            Hire an amazing <br />
                            local photographer <br />
                            anywhere in the world</h2>

                        <p className=' text-lg mt-3'>Looking for professional photographers to work with? <br /> You came to the right place. On Fiverr, you can easily <br /> find top photographers for any job necessary</p>
                        <div className=' mt-3'>
                            <button className="btn w-32  btn-active btn-accent text-white mr-6">Hire Me</button>
                            <button className="btn btn-outline btn-warning">Pre Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;