import React, { useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import { Link } from "react-router-dom";

export default function GetInTouch() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        comments: ""
    });
    
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        
        if (!/^[A-Za-z\s]{2,}$/.test(formData.name)) {
            errors.name = "Enter a valid name (only letters, min 2 chars).";
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = "Enter a valid email address.";
        }
        if (formData.subject.length < 3) {
            errors.subject = "Subject must be at least 3 characters long.";
        }
        if (formData.comments.length < 10) {
            errors.comments = "Message must be at least 10 characters long.";
        }
        
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch !</h3>
                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a UI/UX Developer. Overall 5 years of experience. Experienced with all stages of the development.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                            <form onSubmit={handleSubmit}>
                                <div className="grid lg:grid-cols-12 lg:gap-5">
                                    <div className="lg:col-span-6 mb-5">
                                        <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-input w-full py-2 px-3 border rounded h-10 outline-none focus:border-amber-500/50" placeholder="Name :"/>
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </div>
                                    <div className="lg:col-span-6 mb-5">
                                        <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-input w-full py-2 px-3 border rounded h-10 outline-none focus:border-amber-500/50" placeholder="Email :"/>
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <input name="subject" value={formData.subject} onChange={handleChange} className="form-input w-full py-2 px-3 border rounded h-10 outline-none focus:border-amber-500/50" placeholder="Subject :"/>
                                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                                    </div>
                                    <div className="mb-5">
                                        <textarea name="comments" value={formData.comments} onChange={handleChange} className="form-input w-full py-2 px-3 border rounded h-28 outline-none focus:border-amber-500/50" placeholder="Message :"></textarea>
                                        {errors.comments && <p className="text-red-500 text-sm">{errors.comments}</p>}
                                    </div>
                                </div>
                                <button type="submit" className="btn bg-amber-500 hover:bg-amber-600 text-white rounded-md h-11 flex items-center justify-center">Send Message</button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-4">
                        <div className="lg:ms-8">
                            <div className="flex">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilPhone className="block rounded text-2xl dark:text-white mb-0"/>
                                </div>
                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                    <Link to="tel:+152534-468-854" className="text-slate-400 text-[15px]">+91-9177059193</Link>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilEnvelope className="block rounded text-2xl dark:text-white mb-0"/>
                                </div>
                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                    <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">harinath192006@gmail.com</Link>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilMapMarker className="block rounded text-2xl dark:text-white mb-0"/>
                                </div>
                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                                    <p className="text-slate-400 text-[15px] mb-2">Hyderabad, Telangana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}