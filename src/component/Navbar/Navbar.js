import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FaUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('logOut successfully')
            })
            .catch(error => {
                console.error('log out error', error)
            })
    }



    return (


        <div>
            <div className="navbar text-white bg-black px-0 sm:px-2">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                            <li><Link to='/' className=' font-bold'>Home</Link></li>

                            {
                                user?.uid && <>
                                    <li><Link to='/addservice' className=' font-bold'>Add Service</Link></li>
                                    <li><Link to='/myreview' className=' font-bold'>My Reviews</Link></li>

                                </>
                            }

                            <li><Link to='/booking' className=' font-bold'>Booking</Link></li>
                            {
                                user?.email === 'admin@gmail.com' && <li><Link to='/dashbord' className='font-bold'>Dashbord</Link></li>
                            }

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case sm:text-xl text-lg px-0 sm:px-2">PhotoGraphyPro</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li ><Link to='/' className=' font-bold'>Home</Link></li>
                        <li ><Link to='/services' className=' font-bold'>Services</Link></li>

                        {
                            user?.uid && <>
                                <li><Link to='/myreview' className=' font-bold'>My Reviews</Link></li>
                                <li><Link to='/booking' className=' font-bold'>Booking</Link></li>

                            </>
                        }


                        {
                            user?.email === 'admin@gmail.com' && <li><Link to='/dashbord' className='font-bold'>Dashbord</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end ">



                    {
                        user?.uid ?
                            <>

                                <Link className='font-bold mx-4' onClick={handleLogOut}>LogOut</Link>
                                <label htmlFor="dashbord" className="mr-4 lg:hidden"><HiMenu className='pt-1' size={25}></HiMenu></label>
                                {
                                    user?.photoURL ? <img className='rounded-full w-8 h-8 mr-5' src={user.photoURL} alt="" />
                                        :
                                        <div> <FaUser className=' rounded-full w-7 h-7 mr-5'></FaUser></div>

                                }
                            </>
                            :
                            <>
                                <Link className=' font-bold mx-3' to='/login' >LogIn</Link>
                                <Link className=' font-bold mx-4' to='/signup' >SignUp</Link>
                                {
                                    user?.email === 'admin@gmail.com' && <Link htmlFor="dashbord" className="mr-4  lg:hidden"><HiMenu className='pt-1' size={25}></HiMenu></Link>
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;