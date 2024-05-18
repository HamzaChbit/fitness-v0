'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
const PageContact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
   

    emailjs.sendForm('service_1l8wln6', 'template_tugej4a', form.current, 'EGW9Iy57TjlDfnomu')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent!")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
    
  };
  const onSubmit = (data, event) => {
    
    event.preventDefault();

    
    if (data.email === "") {
      toast.error("Please enter your email address");
      return;
    }

    
    sendEmail(data);
  };

 








  
  




  return (
    
        <div className='bg-background w-full  h-[100%]  mx-auto  py-10  ' >
<div className='flex justify-center items-center'  data-aos="fade-down">

<div className='max-w-7xl mx-auto my-5 py-8 bg-course-seven flex flex-col justify-center items-center h-[80vh]   bg-no-repeat bg-cover  '> 
<div className='flex flex-col justify-end items-center py-5 ' >
    <h1 className='text-white font-bold text-4xl'>FAQ</h1>
    <p className='text-xl mt-12 font-medium text-white w-[70%]' >Im a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font</p>
</div>


    

</div>
</div>
  
 
    <div className='max-w-7xl bg-white mx-auto  ' >
    <div  className='flex flex-col items-center justify-center  px-5      '   data-aos="fade-up">
    <div  className='max-w-7xl mx-auto' >
    <div className='flex flex-col justify-center items-center mt-5' >
        <h1 className='text-body font-bold  text-2xl  md:text-4xl py-7' >YOUR FITNESS CAREER STARTS HERE</h1>
        <p  className='text-md font-light py-4' >500 Terry Francine St. San Francisco, CA 94158</p>
        <p className='text-md font-light py-4' >info@mysite.com</p>
        <p className='text-md font-light py-4' >1-800-000-0000</p>

      </div>
      {/* form */}
      <div className='flex flex-col ' >
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5  min-w-[50%]      xxl:min-w-[50%]  xl:min-w-[50%]  lg:min-w-[70%]   md:min-w-[80%]  mdl:min-w-[80%] sm:min-w-[82%]  xs:min-w-[92%] '   >
     
     <input type="text"
      name="user_name" placeholder='Name'
      {...register("user_name", { required: true })}
      
       className='py-2 px-2 border-b-2 border-black bg-background'/>
       {errors.user_name && (
 <p className="text-red-500 text-sm">Name is required</p>
)}
     <input   type="email"
      name="user_email" 
      placeholder='Email'
       {...register("user_email", { required: true })}
     className='py-2 px-2 border-b-2 border-black bg-background'/>
           {errors.user_name && (
 <p className="text-red-500 text-sm">Email is required</p>
)}
   
     <input name="subject" placeholder='Subject'
     {...register("subject", { required: true })}
     className='py-2 px-2 border-b-2 border-black bg-background'   />
     {errors.user_name && (
 <p className="text-red-500 text-sm">Subject is required</p>
)}
     <textarea name="message"   {...register("message", { required: true })} placeholder='Type your message here' className=' pb-12 border-2 border-black bg-background'/>
     {errors.user_name && (
 <p className="text-red-500 text-sm">Message is required</p>
)}
        <input type="submit" value="submit" className='cursor-pointer w-full h-auto px-3 py-3  bg-black text-white hover:bg-btn duration-300 '  />
 
         
    
  
   </form>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5382430824934!2d-9.520827824735596!3d30.392467374750257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c8414ee8d60d%3A0x68f0c785a860566e!2sCity%20Club%20-%20Tassila!5e0!3m2!1sen!2sma!4v1690715107763!5m2!1sen!2sma" 
    style={{width:"600", height:"450",marginTop:'4px', style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
      </div>




    </div>
    </div>
    </div>
    </div>
   
  )
}

export default PageContact