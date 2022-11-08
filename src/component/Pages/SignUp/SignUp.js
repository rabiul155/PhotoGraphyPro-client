
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';



const SignUp = () => {

    const navigate = useNavigate();

    const { createUser, createUserGoogle, updateUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('successfully create an user')
                form.reset();
                navigate('/')
                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }
                updateUser(profile)
                    .then(() => {

                        console.log('profile updated')
                    })
                    .catch(error => {
                        console.error('profile update error ', error)
                    })


            })
            .catch(error => {
                console.error('create user error', error)
                const errorMessage = error.message;
                toast.error(errorMessage)
            })

    }

    const handleGoogleLogIn = () => {
        createUserGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
                toast.success('successfully logIn')
            })
            .catch(error => {
                console.log('google log in error', error)
            })
    }


    return (

        <div className=' flex justify-center mt-5 mx-2 '>
            <div className="w-full max-w-sm">
                <form onSubmit={handleSubmit} className=" bg-slate-300  rounded p-6 ">
                    <h2 className=" text-3xl text-center font-bold mb-3">SignUp</h2>
                    <hr />
                    <div className="mb-4 mt-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                            UserName
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="UserName" name='name' required />
                    </div>
                    <div className="mb-4 mt-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                            PhotoURL
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="PhotoURL" name='photoURL' required />
                    </div>
                    <div className="mb-4 mt-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name='email' required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-left text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>

                        <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="***********" name='password' required />



                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            SignUp
                        </button>

                    </div>
                    <div>
                        <p className=" m-2 text-center">Have an account <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-500">LogIn</Link></p>
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
    );
};

export default SignUp;