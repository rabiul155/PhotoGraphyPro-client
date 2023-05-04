import React, { useEffect, useState } from 'react';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Email from '../../Email/Email';
import BottomBanner from './BotomBanner/BottomBanner';
import OurSevices from './OurServices/OurSevices';
import Gallery from './Gallery/Gallery';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import SlideShow from './SlideShow/SlideShow';

const Home = () => {

    const [services, setServices] = useState([])
    useTitle('Home')

    useEffect(() => {
        fetch('https://70-assignment-server.vercel.app/home-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>

            <Banner></Banner>

            {/* .................services section .............. */}

            <div className='my-6'>
                <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3'>
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



            <Gallery></Gallery>

            <SlideShow></SlideShow>

            <OurSevices></OurSevices>

            <BottomBanner></BottomBanner>

            <Email></Email>

            <AboutMe></AboutMe>


        </div>
    );
};

export default Home;