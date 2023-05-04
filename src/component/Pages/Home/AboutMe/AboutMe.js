import React from 'react';
import profile from '../../../../images/pro.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className=' bg-stone-800'>
                <div className=' flex justify-around flex-col-reverse sm:flex-row sm:w-3/4 text-white m-auto p-8'>
                    <div className='sm:w-1/2 pt-7 sm:pt-0'>
                        <h2 className=' text-4xl font-bold sm:text-left text-center'> About Me </h2>
                        <p className=' text-lg font-bold'>Photography is my hobby.
                            I have join this profession before 5 years and this long time i capture more than thousent of pictule. I love nature so I used to take picture of nature. I try my best to get a perfect picture. Sometime I have to wait a lont time to take a perfect picture.I visited more thank 20 countries to take picture of nature. Different countiries had different nature. So I have to change my apporach to take perfect picture.When I get the perfect shoot then I edit the picture and send it to a journal. I have written many artile about photography which is effective for capture perfect picture.At last I would say I love my profession. </p>

                    </div>
                    <div className=''>
                        <img className='w-80 h-80 sm:w-96 sm:h-96 rounded-full' src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;