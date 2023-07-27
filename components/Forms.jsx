'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Forms = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1l8wln6', 'template_tugej4a', form.current, 'EGW9Iy57TjlDfnomu')
        .then((result) => {
            console.log(result.text);
            toast.success("Message sent!")

        }, (error) => {
            console.log(error.text);
        });
      
    };
  



  return (
    <div  className='w-full flex flex-col items-center justify-center h-screen px-5  mt-5  bg-background  '  >
    <div  className='max-w-7xl mx-auto' >
    <div className='flex flex-col justify-center items-center mt-5' >
        <h1 className='text-body font-bold text-4xl py-7' >YOUR FITNESS CAREER STARTS HERE</h1>
        <p  className='text-md font-light py-4' >500 Terry Francine St. San Francisco, CA 94158</p>
        <p className='text-md font-light py-4' >info@mysite.com</p>
        <p className='text-md font-light py-4' >1-800-000-0000</p>

      </div>
      {/* form */}
      <div className='flex flex-col ' >
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5  min-w-[50%]      xxl:min-w-[50%]  xl:min-w-[50%]  lg:min-w-[70%]   md:min-w-[80%]  mdl:min-w-[80%] sm:min-w-[82%]  xs:min-w-[92%] '   >
     
      <input type="text" name="user_name" placeholder='Name' className='py-2 px-2 border-b-2 border-black bg-background'/>

      <input type="email" name="user_email" placeholder='Email' className='py-2 px-2 border-b-2 border-black bg-background'/>
      
    
      <input name="subject" placeholder='Subject' className='py-2 px-2 border-b-2 border-black bg-background'/>
    
      <textarea name="message" placeholder='Type your message here' className=' pb-12 border-2 border-black bg-background'/>
    
         <input type="submit" value="Send" className='cursor-pointer w-full h-auto px-3 py-3  bg-black text-white hover:bg-btn duration-300 '  />
  
          
     
   
    </form>
      </div>




    </div>
    </div>
  )
}

export default Forms
