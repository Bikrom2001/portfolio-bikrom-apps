import React from 'react';
import Bikrom from '../accests/man/Bikrom.png';

const About = () => {
    return (
        <div>
            <section>
                <div className="container flex flex-col justify-start p-6 mx-auto sm:py-12 lg:py-14 lg:flex-row lg:justify-between">

                    <div className="flex flex-col justify-center p-6 text-left rounded-sm lg:max-w-3xl xl:max-w-3xl lg:text-left">
                        <p className='font-inter text-2xl all-heading'> <span className='logo-color mr-3'> 01. </span> About Me</p>

                        <p className='font-mono text-justify mb-4 color-gay'>
                            Hello! My name is Bikrom and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try editing custom Tumblr themes — turns out that hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p className='font-mono text-justify mb-4 color-gay'>
                            Fast-forward to today, and I’ve had the privilege of working at a software company web developer position. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        </p>
                        <p className='font-mono text-justify mb-4 color-gay'>
                            I also recently learned a course that covers everything you need to build a web app with the Spotify API using Node & React.
                        </p>
                        <p className='font-mono text-justify logo-color mb-5'>
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className='flex gap-10 items-center flex-wrap'>
                            <div>
                                <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> JavaScript (ES6+)</span>
                                </p>
                                <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> React JS</span>
                                </p>
                                <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> Node.jS</span>
                                </p>
                                <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> Tailwind CSS</span>
                                </p>
                            </div>
                            <div>
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> TypeScript</span>
                                </p>    
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> MongoDB</span>
                                </p>    
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> Express.JS</span>
                                </p>    
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> HTML5</span>
                                </p>    
                            </div>
                            <div>
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> Redux.JS</span>
                                </p>    
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> Firebase</span>
                                </p>    
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> Bootstrap</span>
                                </p>    
                            <p className='flex font-mono items-center gap-4 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-3 h-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                   <span> CSS3</span>
                                </p>    
                            </div>
                        </div>

                    </div>
                    <div className="flex items-start bikrom-img justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={Bikrom} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md shadow-md" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;