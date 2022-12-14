import React from 'react'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../accests/animation/125702-404-page-not-found.json';

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span><span className='logo-color'><Lottie animationData={animation}></Lottie></span>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8 mt-[-120px]'>
            Sorry, we couldn't find this page.
          </p>
          <Link
            to='/'
            className='px-8 py-3 custom-btn'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
