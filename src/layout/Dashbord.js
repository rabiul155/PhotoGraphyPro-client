import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Pages/Footer/Footer';

const Dashbord = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashbord" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content m-3">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-200 text-base-content">

                        <li><Link to='dashbord/addservice' className=' font-bold'>Add Service</Link></li>

                        <li><Link to='dashbord/customerOrder' className=' font-bold'>Customer Order</Link></li>

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashbord;