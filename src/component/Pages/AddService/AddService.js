import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService')

    const handleSubmit = (event) => {



        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const about = form.about.value;


        const service = {
            name: name,
            picture: photo,
            price: price,
            rating: rating,
            about: about,

        }
        console.log(service);

        fetch('http://localhost:5000/services', {

            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                toast.success('successfully added service')
            })
            .catch(error => console.error('service added error ', error))
    }

    return (

        <div className=' w-3/4 mx-auto'>
            <h2 className=' text-center text-4xl font-bold pt-5'>ADD  SERVICES</h2>
            <form onSubmit={handleSubmit} >
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
                    <div >
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Service Name</span>

                        </label>
                        <input name='name' type="text" placeholder="Service Name" className="input border border-sky-500 rounded w-full " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold ">Photo URL</span>

                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input border border-sky-500 rounded w-full " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Service Price</span>

                        </label>
                        <input name='price' type="text" placeholder="Service Price" className="input border border-sky-500 rounded w-full " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Service Rating</span>

                        </label>
                        <input name='rating' type="text" placeholder="Service Rating" className="input border border-sky-500 rounded w-full " required />
                    </div>


                </div>
                <div className=' px-4'>
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Service Details</span>

                    </label>
                    <textarea name='about' className="textarea border border-sky-500 rounded w-full" placeholder="Details" required></textarea>
                </div>
                <div className=' flex justify-center m-6'>
                    <button type='submit' className="btn btn-warning w-48 ">ADD Service </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;