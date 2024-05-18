import Link from 'next/link'
import React from 'react'

const Courses = () => {
  return (
    <div  className='bg-body  h-auto mx-auto' >
      <div className='  flex flex-col justify-center items-center   ' data-aos="fade-up"
     data-aos-duration="3000"> 
      {/* hedar */}
      <div className='text-white flex flex-col justify-center items-center mt-10   ' >
        <h1  className=' font-bold   text-3xl  ' >OUR COURSES</h1>
        <p  className='w-[65%] text-md mt-10  lg:w-[40%]   hidden  xxl:block xl:block lg:block  md:hidden mdl:hidden sm:hidden  xs:hidden  ' > Im a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Im a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      {/* images coursrs */}
      <div  className=' flex justify-center mb-12 mt-12 items-center gap-7 flex-col min-w-7xl  h-auto  box-border  mx-auto' >

        <div className='   flex flex-row  h-[50vh]  'data-aos="fade-up"
     data-aos-duration="3000" >
          <div className='bg-course-one    min-w-[50%] bg-cover  hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden   rounded-s-lg ' >

          </div>
          <div className='w-full  rounded-e-lg bg-white flex flex-col justify-center items-center   ' >
       <h1 className='text-body px-5 py-5 font-bold text-2xl' >MASTER TRAINER COURSE</h1>
       <p  className='text-md font-light px-10  hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden  ' > Im a paragraph. Click here to add your own text and edit me. Its easy</p>
       <Link href='/courses' >
            <button className='text-body border-2 rounded-lg border-body my-5 px-4 py-1 hover:bg-body hover:text-white duration-700 mt-12 mb-22' >
           Enrol Now
        </button>
            </Link>
          </div>

        </div>

        <div className='  flex flex-row  h-[50vh] mx-auto 'data-aos="fade-up"
     data-aos-duration="3000" >
          <div className='bg-course-two min-w-[50%]      xxl:min-w-[50%]  xl:min-w-[50%]  lg:min-w-[70%]   md:min-w-[80%]  mdl:min-w-[80%] sm:min-w-[82%]  xs:min-w-[92%]
           bg-cover hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden rounded-s-lg ' >
          </div>
        <div className='w-full   rounded-e-lg  bg-white flex flex-col justify-center items-center' >
       <h1 className='text-body px-5 py-5 font-bold text-2xl' >MASTER TRAINER COURSE</h1>
       <p  className='text-md font-light px-10  hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden' > Im a paragraph. Click here to add your own text and edit me. Its easy</p>
       <Link href='/courses' >
            <button className='text-body border-2 rounded-lg border-body my-5 px-4 py-1 hover:bg-body hover:text-white duration-700 mt-12 mb-22' >
           Enrol Now
        </button>
            </Link>
          </div>  </div>  


          <div className=' border-green  border-2xl flex flex-row  h-[50vh]   ' data-aos="fade-up"
     data-aos-duration="3000">
          <div className='bg-course-tree min-w-[50%] bg-cover hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden rounded-s-lg ' >

          </div>
          <div className='w-full rounded-e-lg    bg-white flex flex-col justify-center items-center' >
       <h1 className='text-body px-5 py-5 font-bold text-2xl' >MASTER TRAINER COURSE</h1>
       <p  className='text-md font-light px-10 hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden' > Im a paragraph. Click here to add your own text and edit me. Its easy</p>
       <Link href='/courses' >
            <button className='text-body border-2  rounded-lg border-body my-5 px-4 py-1 hover:bg-body hover:text-white duration-700 mt-12 mb-22' >
           Enrol Now
        </button>
            </Link>
          </div>

        </div>


















     


      </div>



      </div>
      
    </div>
  )
}

export default Courses
