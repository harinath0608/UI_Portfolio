import React from "react";
import * as Unicons from "@iconscout/react-unicons"
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                    <div className="lg:col-span-3 md:text-start text-center">
                        <Link to="#" className="text-[22px] focus:outline-none">
                        <h2> Portfolio </h2>
                            {/* <img src="/images/logo-light.png" className="mx-auto md:me-auto md:ms-0" alt=""/> */}
                        </Link>
                    </div>

                    <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                        <p className="mb-0">©2025 Made With By Harinath </p>
                    </div>


                </div>
            </div>
        </div>
    </footer>
    )
}