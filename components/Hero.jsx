'use client'
import React, { useEffect } from 'react'

import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";


const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='mx-auto max-w-7xl h-[88vh] flex ' >
        <div className='bg-body  w-[50%] flex  px-5  justify-center flex-col  xxl:w-[50%] xl:w-[80%] lg:w-[90%]  md:w-[90%] mdl:w-[100%]sm:w-[100%]  xs:w-[100%]  ' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
 <h1

       className='md:text-6xl text-4xl  leading-normal font-bold my-2 text-white' >
         START YOUR <br /> FITNESS  <br />CAREER <br /> TODAY.</h1>
                  <Link href='/about
' >
<button className=' px-2 md:px-5 md:py-3 py-1  mt-2  md:mt-7 bg-button/90 text-white rounded-xl   hover:bg-white hover:text-black '  >
  Lean More
</button>
                     </Link>
        </div>

        <div className='w-[50%] bg-hero-pattern   bg-cover  hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden  ' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >

        </div>
        <ScrollToTop smooth className='flex justify-center items-center 'color='red'/>

    </div>
  )
}

export default Hero
