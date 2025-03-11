import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';
const images = [
    "/images/works/1.jpg",
    "/images/works/2.jpg",
    "/images/works/3.jpg",
    "/images/works/4.jpg",
    "/images/works/5.jpg",
    "/images/works/6.jpg",
    "/images/works/7.jpg",
    "/images/works/8.jpg",
];

export default function Projects() {
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);


    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(!isOpen);
    }

    return (
        <>
            <section className="relative md:py-24 py-16" id="project">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Recent Projects</h3>

                        <p className="text-slate-400 max-w-xl mx-auto text-[15px]">A Front End Developer builds responsive, user-friendly, and visually engaging interfaces by translating design concepts into functional code. They collaborate with designers, back-end developers, and stakeholders to implement seamless user experiences. Using HTML, CSS, and JavaScript frameworks, they ensure cross-browser compatibility, optimize performance, and maintain clean, reusable code. They also conduct usability testing, gather feedback, and iterate on designs to improve accessibility and overall user satisfaction</p>
                    </div>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px] justify-items-center">
                        {/* Card 1 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 w-[200px] h-[100px] flex justify-center items-center">
                            <img src="/images/works/1.jpg" alt="" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <Link2 to="https://weather-app-orcin-gamma-40.vercel.app/" className="text-white hover:text-amber-500 font-semibold transition-all duration-500"> Weather </Link2>
                                <span className="block text-sm text-slate-400">UI / UX Design</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link2 to="https://github.com/harinath0608/Weather_app.git" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16} /></Link2>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 w-[300px] h-[200px] flex justify-center items-center">
                            <img src="/images/works/2.jpg" alt="" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <Link2 to="https://reactmartapplication.vercel.app/" className="text-white hover:text-amber-500 font-semibold transition-all duration-500"> ecommerce </Link2>
                                <span className="block text-sm text-slate-400">Technology</span>
                            </div>
                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link2 to="https://github.com/harinath0608/Mart-.git" onClick={() => handleCLick(1)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16} /></Link2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length)
                    }
                />
            )}

        </>

    )
}