import React from 'react';
import developer from '../accests/Project/developer-grid-quiz-aa03c6.netlify.app_.png';
import excersise from '../accests/Project/curious-semifreddo-476848.netlify.app_.png';
import pin from '../accests/Project/pin-generator155.netlify.app_.png';

const MoreProject = () => {
    return (
        <section className="">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Other Noteworthy Projects</h2>
                    <p className="font-mono text-md logo-color">view the archive</p>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    <a rel="noopener noreferrer" target='_blank' href="https://developer-grid-quiz-aa03c6.netlify.app/" className="max-w-sm mx-auto card-hover group hover:no-underline focus:no-underline rounded-md card-background">
                        <img role="presentation" className="object-cover w-full rounded h-48 dark:bg-gray-500" alt='developer' src={developer} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">DEVELOPER-GRID-QUIZ</h3>
                            <div className='flex mt-6 mb-5 items-center flex-wrap justify-start font-mono gap-4 logo-color'>
                                <p className='header-hover cursor-pointer text-sm'>Tailwind CSS</p>
                                <p className='header-hover text-sm cursor-pointer'>React.JS</p>
                                <p className='header-hover text-sm cursor-pointer'>Node.JS</p>
                            </div>
                            <p className='font-mono text-justify'>A single-page web app DEVELOPER-GRID Quiz, built with React.js, API, and Tailwind CSS......</p>
                            <div className='flex items-center pt-3 gap-4 justify-between'>
                                <button type="button" className="px-4 py-2 text-sm custom-btn">Show More</button>
                                <div className='flex items-center gap-4'>
                                    <a rel="noopener noreferrer" href="https://github.com/Bikrom2001/developer-grid-quiz-apps" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github w-6 h-6 cursor-pointer header-hover"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="https://developer-grid-quiz-aa03c6.netlify.app/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 header-hover cursor-pointer h-6">
                                            <title>Live-side</title>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="https://curious-semifreddo-476848.netlify.app/" className="max-w-sm mx-auto icons-hover group hover:no-underline focus:no-underline card-background">
                        <img role="presentation" className="object-cover w-full rounded h-48 dark:bg-gray-500" alt='excersise' src={excersise} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">ARCTIC-HEALTH-CLUB</h3>
                            <div className='flex mt-6 mb-5 items-center flex-wrap justify-start font-mono gap-4 logo-color'>
                                <p className='header-hover cursor-pointer text-sm'>Tailwind CSS</p>
                                <p className='header-hover text-sm cursor-pointer'>React.JS</p>
                                <p className='header-hover text-sm cursor-pointer'>Node.JS</p>
                            </div>
                            <p className='font-mono text-justify'>A single-page web app ARCTIC-HEALTH-CLUB, built with React.js, API, funcation, and Tailwind CSS......</p>
                            <div className='flex items-center pt-3 gap-4 justify-between'>
                                <button type="button" className="px-4 py-2 text-sm custom-btn">Show More</button>
                                <div className='flex items-center gap-4'>
                                    <a rel="noopener noreferrer" href="https://github.com/Bikrom2001/arctic-health-club" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github w-6 h-6 cursor-pointer header-hover"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="https://curious-semifreddo-476848.netlify.app/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 header-hover cursor-pointer h-6">
                                            <title>Live-side</title>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </a>

                    <a rel="noopener noreferrer" href="https://pin-generator155.netlify.app/" className="max-w-sm mx-auto icons-hover group hover:no-underline focus:no-underline card-background">
                        <img role="presentation" className="object-cover w-full rounded h-48 dark:bg-gray-500" alt='pin' src={pin} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline uppercase">Random pin Generator</h3>
                            <div className='flex mt-6 mb-5 items-center flex-wrap justify-start font-mono gap-4 logo-color'>
                                <p className='header-hover cursor-pointer text-sm'>Tailwind CSS</p>
                                <p className='header-hover text-sm cursor-pointer'>Javascript</p>
                                <p className='header-hover text-sm cursor-pointer'>HTML</p>
                                <p className='header-hover text-sm cursor-pointer'>CSS</p>
                            </div>
                            <p className='font-mono text-justify'>A single-page web app Random pin Generator and pin match Generator apps, built with Javascript, css......</p>
                            <div className='flex items-center pt-3 gap-4 justify-between'>
                                <button type="button" className="px-4 py-2 text-sm custom-btn">Show More</button>
                                <div className='flex items-center gap-4'>
                                    <a rel="noopener noreferrer" href="https://github.com/Bikrom2001/developer-grid-quiz-apps" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github w-6 h-6 cursor-pointer header-hover"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="https://pin-generator155.netlify.app/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 header-hover cursor-pointer h-6">
                                            <title>Live-side</title>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-md custom-btn">Show  More...</button>
                </div>
            </div>
        </section>
    );
};

export default MoreProject;