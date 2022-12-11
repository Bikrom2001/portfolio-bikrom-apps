import React, { useRef } from 'react';
import icons2 from '../accests/contact/contact-icons.svg';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1g6x9kh', 'template_c8ny93m', form.current, 'CjTNg5FmJfj8-8uSp')
        .then((result) => {
            console.log(result.text);
            toast.success('Successfully message send', {autoClose: 1500});
        }, (error) => {
            console.log(error.text);
        });
        
        form.reset();
    };



    return (
      <section>
         <p className='font-inter  px-4 md:px-16 text-2xl all-heading'> <span className='logo-color mr-3'> 04. </span> What’s Next? </p>

          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-12 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-14 xl:px-32">
            
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                </div>
                <img src={icons2} alt="" className="p-5 h-52 md:h-64" />
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm font-mono">Full name</label>
                    <input id="name" name='from_name' type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label for="email" className="text-sm font-mono">Email</label>
                    <input id="email" name='user_email' type="email" className="w-full focus:border-green-500 p-3 rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label for="message" className="text-sm font-mono">Message</label>
                    <textarea id="message" name='message' rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded custom-btn font-mono">Send Message</button>
            </form>
        </div>
      </section>
    );
};

export default Contact;