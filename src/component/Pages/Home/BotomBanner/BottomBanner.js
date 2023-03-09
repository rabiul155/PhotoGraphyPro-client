import React from 'react';
import './BottomBanner.css'

const BottomBanner = () => {
    return (
        <div className='bgImg h-[500px] text-base-200 flex justify-center items-center'>
            <div>
                <h2 className=' lg:w-2/3 m-auto text-3xl font-serif font-bold text-center'>"Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things, long after you have forgotten everything."</h2>
                <h2 className='text-lg font-bold font-serif text-center'>Aaron Siskind</h2>
            </div>
        </div>
    );
};

export default BottomBanner;