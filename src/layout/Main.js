import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' min-h-screen'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;