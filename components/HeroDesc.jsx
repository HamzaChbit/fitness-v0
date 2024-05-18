import React from 'react'
import Link from 'next/link'
const HeroDesc = () => {
  return (
    <div className=' h-auto py-20 bg-background mx-auto mt-20 flex justify-center items-center ' data-aos="fade-up"
    data-aos-duration="3000">

  
    <div className=' max-w-7xl  px-30 items-center mx-auto flex   ' >
      <div className='bg-hero-male bg-cover  w-[50%] h-[70vh]    xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden   ' >

      </div>
      <div className=' w-[50%]       xxl:w-[50%]  xl:w-[50%]  lg:w-[70%]   md:w-[80%]  mdl:w-[80%] sm:w-[82%]  xs:w-[92%]
          h-[70vh] flex items-start justify-center leading-normal flex-col px-5' >
        <h1 className='text-body text-3xl font-bold py-5'>WHY FITT?</h1>
        <p  className='font-light  text-sm w-[70%]   xxl:w-[70%]  xl:w-[70%]  lg:w-[80%]   md:w-[90%]  mdl:w-[95%] sm:w-[95%]  xs:w-[95%]  ' >
        Im a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. Im a great place for you to tell a story and let your users know a little more about you.

​<br />
<br />


This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. 


        </p>
                    <Link href='/contact
' >
        <button className='text-body border-2 border-body my-5 px-4 py-1 hover:bg-body hover:text-white duration-700' >
            Apply Now
        </button> 
                          </Link>
      </div>
    </div>
    </div>
  )
}

export default HeroDesc
