'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='mx-auto max-w-7xl h-[88vh] flex ' >
        <div className='bg-body w-[50%] flex items-center px-5  justify-center flex-col  xxl:w-[50%] xl:w-[80%] lg:w-[90%]  md:w-[90%] mdl:w-[100%]sm:w-[100%]  xs:w-[100%]  ' >
 <h1

       className='text-6xl leading-normal font-bold my-2 text-white' >
         START YOUR <br /> FITNESS  <br />CAREER <br /> TODAY.</h1>
                  <Link href='/about
' >
<button className='px-4 py-2 mt-7 bg-button text-white rounded-xl  mr-60' >
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
