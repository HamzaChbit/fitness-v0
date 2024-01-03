'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='mx-auto max-w-7xl h-[88vh] flex ' >
        <div className='bg-body  w-[50%] flex  px-5  justify-center flex-col  xxl:w-[50%] xl:w-[80%] lg:w-[90%]  md:w-[90%] mdl:w-[100%]sm:w-[100%]  xs:w-[100%]  ' >
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

        <div className='w-[50%] bg-hero-pattern   bg-cover  hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden  '  >

        </div>


    </div>
  )
}

export default Hero
