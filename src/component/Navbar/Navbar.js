import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

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
            <div className="navbar bg-slate-400 px-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className=' font-bold'>Item 1</Link></li>

                            <li><Link className=' font-bold'>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li ><Link className=' font-bold'>Item 1</Link></li>

                        <li><Link className=' font-bold'>Item 3</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.uid ?
                            <>
                                <Link className=' font-bold mx-3' onClick={handleLogOut}>LogOut</Link>
                            </>
                            :
                            <>
                                <Link className=' font-bold mx-2' to='/login' >LogIn</Link>
                                <Link className=' font-bold mx-3' to='/signup' >SignUp</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;