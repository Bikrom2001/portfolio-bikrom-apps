import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='px-4 py-5 font-mono mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label='BIKROM ROY'
          title='BIKROM ROY'
          className='inline-flex items-center logo-color'
        >
          <svg id="logo" width='42px' height='42px' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Logo</title><g transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><path d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z" fill="currentColor"></path><polygon id="Shape" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon></g></g></svg>

          <span className='ml-2 text-xl font-bold tracking-wide logo-color  uppercase'>
            BIKROM ROY
          </span>
        </Link>
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          <li>
            <Link
              to='/home'
              aria-label='Home'
              title='Home'
              className='font-medium tracking-wide header-hover light-color header-hover'
            >
              <span className='logo-color'>01.</span>Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              aria-label='About'
              title='About'
              className='font-medium tracking-wide header-hover light-color'
            >
              <span className='logo-color'> 02.</span>About
            </Link>
          </li>
          <li>
            <Link
              to='/experience'
              aria-label='Experience'
              title='Experience'
              className='font-medium tracking-wide header-hover light-color'
            >
              <p> <span className='logo-color'> 03.</span>Experience</p>
            </Link>
          </li>
          <li>
            <Link
              to='/work'
              aria-label='Work'
              title='Work'
              className='font-medium tracking-wide header-hover light-color'
            >
              <span className='logo-color'>04.</span>Work
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              aria-label='Contact'
              title='Contact'
              className='font-medium tracking-wide header-hover light-color'
            >
              <span className='logo-color'> 05.</span>Contact
            </Link>
          </li>
          <li>
            <Link
              to='/blog'
              aria-label='Contact'
              title='Contact'
              className='font-medium tracking-wide header-hover light-color'
            >
              <span className='logo-color'> 06.</span>Blogs
            </Link>
          </li>
        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full'>
              <div className='p-5 bg-black border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      to='/'
                      aria-label='Company'
                      title='Company'
                      className='inline-flex items-center'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 32 32'
                        fill='currentColor'
                        className='flex-shrink-0 w-8 h-8 rounded-full logo-color'
                      >
                        <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                      </svg>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Smart Home
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link
                        to='/about'
                        aria-label='About'
                        title='About'
                        className='font-medium tracking-wide header-hover light-color'
                      >
                        <span className='logo-color'> 02.</span>About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/experience'
                        aria-label='Experience'
                        title='Experience'
                        className='font-medium tracking-wide header-hover light-color'
                      >
                        <p> <span className='logo-color'> 03.</span>Experience</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/work'
                        aria-label='Work'
                        title='Work'
                        className='font-medium tracking-wide header-hover light-color'
                      >
                        <span className='logo-color'>04.</span>Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        aria-label='Contact'
                        title='Contact'
                        className='font-medium tracking-wide header-hover light-color'
                      >
                        <span className='logo-color'> 05.</span>Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
