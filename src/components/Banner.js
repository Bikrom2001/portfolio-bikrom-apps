import React from 'react';

const Banner = () => {
    return (
        <section className=" dark:text-gray-100">
            <div className="container flex flex-col items-center md:items-start px-4 py-10 text-center md:text-left md:py-10 md:px-10 lg:px-20">
                <h3 className='logo-color font-mono mb-5 font-normal text-lg'>Hi, my name is</h3>
                <h1 className="banner-heading text-4xl md:text-7xl">Bikrom Roy. <br />
                    <span className="color-gay">I build things for the web.</span>
                </h1>
                <p className="mt-8 text-justify color-gay mb-10 text-lg font-mono w-full md:w-4/6">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span className='underlineLink'>Upstatement</span>.</p>
                <div className="flex flex-wrap justify-center">
                   <a target='blank' href="https://drive.google.com/file/d/1jS0WjkoLh203Zp5GYVnDfFdLygQmc59S/view?usp=share_link">
                   <button className="px-6 py-5 m-2 custom-btn">Check out my Resume!</button>
                   </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;