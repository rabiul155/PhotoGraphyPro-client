
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import useTitle from "../../../hooks/useTitle";


const LogIn = () => {
    const [spnning, setSpnning] = useState(false);
    useTitle('logIn')

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const { logIn, createUserGoogle } = useContext(AuthContext)

    const handleSubmit = (event) => {
        setSpnning(true);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                toast.success('log in successfully')
                const user = result.user;
                console.log(user);
                form.reset();
                setSpnning(false)
                navigate(from, { replace: true });


            })
            .catch(error => {
                console.error('login error', error);
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
    }


    const handleGoogleLogIn = () => {
        setSpnning(true);
        createUserGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
                toast.success('successfully logIn')
                setSpnning(false);
            })
            .catch(error => {
                console.log('google log in error', error)
            })
    }


    return (

        <div>
            {
                spnning && <div className=' flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
            }
            <div className=' flex justify-center mt-5 mx-2'>
                <div className="w-full max-w-sm">
                    <form onSubmit={handleSubmit} className=" bg-slate-300  rounded p-6 mb-4">
                        <h2 className=" text-3xl text-center font-bold mb-3">LogIn</h2>
                        <hr />
                        <div className="mb-4 mt-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" name='email' required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>

                            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********" name='password' required />

                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                                </div>

                                <div className="text-sm">
                                    <Link className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                </div>
                            </div>


                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                LogIn
                            </button>

                        </div>
                        <div>
                            <p className=" m-2 text-center">  Not a  member  <Link className="font-medium text-indigo-600 hover:text-indigo-500"> SignUp</Link></p>
                        </div>
                        <p className="text-center mt-2 italic">Create account with </p>
                        <div className='flex justify-center text-2xl pt-3 gap-5'>
                            <Link onClick={handleGoogleLogIn} ><FaGoogle /></Link>
                            <Link><FaFacebook /></Link>
                            <Link><FaGithub /></Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;