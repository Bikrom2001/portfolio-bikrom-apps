import React from 'react';

const Expernices = () => {
    return (
        <div>


            <section className="py-8">
                <div className="container mx-auto">
                    <p className='font-inter  px-4 md:px-8 text-2xl all-heading'> <span className='logo-color mr-3'> 02. </span> Where I’ve Worked </p>
                    <div className="grid grid-cols-5 p-4 md:p-8">
                        <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                            <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Coursework</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50">PeopleNtech</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">PNT in IT</button>

                        </div>
                        <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <h5 className="text-xl font-semibold">Frontend Developer- <span className='underlineLink'>@ PeopleNtech Software</span></h5>
                                <p className='font-mono'>January - April 2022</p>
                                <p className='flex font-mono items-start gap-3 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    <span className='text-justify'> Interfaced with clients on a weekly basis, providing technological expertise</span>
                                </p>
                                <p className='flex font-mono items-start gap-3 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    <span className='text-justify'> Helped solidify a brand direction for blistabloc that spans both packaging and web</span>
                                </p>
                                <p className='flex font-mono items-start gap-3 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    <span className='text-justify'> Interfaced with clients on a weekly basis, providing technological expertise</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                            <h5 className="text-xl font-semibold">PNT in IT <span className='underlineLink'>@ Web Design and Development</span></h5>
                            <p className='font-mono'>January - March 2022</p>
                            <p className='flex font-mono items-start gap-3 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#64ffda" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    <span className='text-justify'> Good Luck Center 151/7 Green Road, 8th Floor Dhaka 1205 Bangladesh</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Expernices;