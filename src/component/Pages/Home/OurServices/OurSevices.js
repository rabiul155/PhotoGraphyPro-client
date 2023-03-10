import React from 'react';
import { FaTree } from "react-icons/fa";
import { FaVenusDouble } from "react-icons/fa";
import { FaAirFreshener } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";



const OurSevices = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-base-500 text-4xl'>Our Popular Sevices</h2>
            <div className=' grid sm:grid-cols-2 gap-3  m-8 lg:grid-cols-4 text-center'>
                <div className='h-80 w-64 bg-base-200 mx-auto p-5 shadow-md hover:shadow-2xl'>
                    <div className=' flex justify-center'>
                        <FaTree size={50}></FaTree>
                    </div>
                    <h2 className='font-bold text-xl m-4'>Nature</h2>
                    <p>Nature photography is the art of capturing images of the natural world. It encompasses a broad range of subjects, from landscapes and wildlife to plants and insects. </p>
                </div>
                <div className='h-80 w-64 bg-base-200 mx-auto p-5 shadow-md hover:shadow-2xl'>
                    <div className=' flex justify-center'>
                        <FaVenusDouble size={50}></FaVenusDouble>
                    </div>
                    <h2 className='font-bold text-xl m-4'>Wedding</h2>
                    <p>Weeding photography captures the beauty of gardens and landscapes, focusing on the colorful flowers and plants amidst the greenery.</p>
                </div>
                <div className='h-80 w-64 bg-base-200 mx-auto p-5 shadow-md hover:shadow-2xl'>
                    <div className=' flex justify-center'>
                        <FaAirFreshener size={50}></FaAirFreshener>
                    </div>
                    <h2 className='font-bold text-xl m-4'>Fashion</h2>
                    <p>Fashion photography is the art of capturing images that showcase clothing, accessories, and beauty in a stylish and visually appealing way.</p>
                </div>
                <div className='h-80 w-64 bg-base-200 mx-auto p-5 shadow-md hover:shadow-2xl'>
                    <div className=' flex justify-center'> <HiPhoto size={50}></HiPhoto></div>
                    <h2 className='font-bold text-xl m-4'>Portrait</h2>
                    <p>Portrait photography involves capturing images of people, showcasing their expressions, moods, and personalities through composition, and other techniques, creating a visual record.</p>
                </div>

            </div>
        </div>
    );
};

export default OurSevices;