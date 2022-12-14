import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../accests/animation/comingsoon.json';

const Blogs = () => {
    return (
        <section className="flex items-center h-full sm:p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto space-y-8 text-center sm:max-w-md">
                <Lottie animationData={animation}></Lottie>
            </div>
        </section>
    );
};

export default Blogs;