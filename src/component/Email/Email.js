import React, { useRef } from 'react';
import mailbox from './mailbox.json'
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4a1zr0v', 'template_j8mjueq', form.current, 'ZO82bw_6iD05LkU2j')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contuctMe' className=' m-2'>
            <h2 className=' text-4xl text-center font-bold text-yellow-400 uppercase p-4'>Get In tocuh</h2>
            <div className=" ">
                <div className="hero-content flex-col lg:flex-row justify-evenly items-center">
                    <div className="text-center lg:text-left">
                        <div>

                            <Lottie className='' animationData={mailbox} loop={true} />;
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} >
                            <h2 className=' text-3xl text-center font-bold text-primary uppercase pt-6'>Contuct Me</h2>
                            <div className="card-body mt-0 pt-2">
                                <div className="form-control my-1">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input name='user_name' type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control my-1">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input name='user_email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control my-1">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea name='message' className="textarea textarea-bordered" placeholder="Write your message here"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Email;