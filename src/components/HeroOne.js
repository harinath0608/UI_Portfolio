import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

export default function HeroOne(){
    return(
        <>
           <section className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5" id="home">
            <div className="absolute inset-0" id="overlay"></div>
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div>
                        <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4"> Hey! I'm  <br/>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Harinath',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Front End Developer',
                                1000,
                                'React Js Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="typewrite text-amber-500"
                            repeat={Infinity}
                        />
                        <span className="typewrite text-amber-500" data-period="2000" data-type='[ "Harinath", "Website Designer", "Web Developer", "UI/UX Designer" ]'> <span className="wrap"></span> </span></h4>
                        <p className="text-slate-400 max-w-xl">A Front End Developer builds responsive, user-friendly, and visually engaging interfaces by translating design concepts into functional code. They collaborate with designers, back-end developers, and stakeholders to implement seamless user experiences. Using HTML, CSS, and JavaScript frameworks, they ensure cross-browser compatibility, optimize performance, and maintain clean, reusable code. They also conduct usability testing, gather feedback, and iterate on designs to improve accessibility and o verall user satisfaction </p>
                    

                    </div>

                    <div className="relative">
                        <img src="/images/hero/3.png" alt=""/>

                        {/* <div className="absolute lg:bottom-20 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center"> */}
                            {/* <span className="text-3xl font-medium mb-0"><span className="counter-value font-bold" data-target="125"> <CountUp
                                            start={0}
                                            className="counter-value"
                                            end={10}
                                            duration={0.80} /></span>+</span> */}
                            {/* <h6 className="text-sm text-slate-400 mt-1"> Project Completed </h6> */}
                        {/* </div> */}

                        <div className="absolute lg:top-80 md:top-56 top-48 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                            <h6 className="font-semibold"> Front End Developer </h6>
                            <h6 className="text-sm text-slate-400 mt-1"> 2+ Years Experience </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
                <Link to="#about"><i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
            </div>
        </div>
        </>
    )
} 