
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";


const SignUp = () => {




    return (

        <div className=' flex justify-center mt-5 mx-2 '>
            <div className="w-full max-w-sm">
                <form className=" bg-slate-300  rounded p-6 ">
                    <h2 className=" text-3xl text-center font-bold mb-3">SignUp</h2>
                    <hr />
                    <div className="mb-4 mt-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
                            UserName
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="UserName" name='name' required />
                    </div>
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



                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            SignUp
                        </button>

                    </div>
                    <div>
                        <p className=" m-2 text-center">Have an account <Link to='/login' class="font-medium text-indigo-600 hover:text-indigo-500">LogIn</Link></p>
                    </div>
                    <p className="text-center mt-2 italic">Create account with </p>
                    <div className='flex justify-center text-2xl pt-3 gap-5'>
                        <Link ><FaGoogle /></Link>
                        <Link><FaFacebook /></Link>
                        <Link><FaGithub /></Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;