import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className='mx-auto max-w-7xl h-full' data-aos="fade-up"
    >
        <div className='flex flex-col items-center justify-center mt-8' >
            <div className='flex flex-col justify-center items-center' >
                <h1 className='text-body font-bold text-4xl py-5' >THE TEAM</h1>
                <p className='w-[80%]  text-md py-8 ' >Im a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text or double click me to add your own content and make changes to the font. Im a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
            {/* team backround */}
            <div className='flex flex-wrap min-w-full gap-1 justify-center items-center' >
                <div className='bg-team-one    bg-cover  h-[70vh] min-w-[30%]  xxl:min-w-[30%]  xl:min-w-[30%]  lg:min-w-[40%]   md:min-w-[52%]  mdl:min-w-[72%] sm:min-w-[82%]  xs:min-w-[92%] ml-5
                   opacity-250 bg-no-repeat flex justify-end  flex-col ' data-aos="fade-up"
                   data-aos-duration="3000">
                    <div className='text-white flex flex-col justify-center items-center mb-20' >
                        <h1 className='font-bold text-2xl' >Nora Cortez</h1>
                    <h3 className='font-bold py-5'>Founder & Lead Instructor</h3> 
                    </div>
                   
                </div>
                <div className='bg-team-two     bg-cover h-[70vh] min-w-[30%]   xxl:min-w-[32%]  xl:min-w-[32%]  lg:min-w-[40%]   md:min-w-[52%]  mdl:min-w-[72%] sm:min-w-[82%]  xs:min-w-[92%] ml-5
                opacity-250 bg-no-repeat flex justify-end  flex-col 'data-aos="fade-up"
                data-aos-duration="3000" >
                    <div className='text-white flex flex-col justify-center items-center mb-20'>
                         <h1 className='font-bold text-2xl'  >Alexander Watts</h1>
                    <h3  className='font-bold py-5' >Lead Instructor</h3>
                    </div>
               
                </div>
                <div  className='bg-team-tree   bg-cover h-[70vh] min-w-[30%]   xxl:min-w-[32%]  xl:min-w-[32%]  lg:min-w-[32%]   md:min-w-[52%]  mdl:min-w-[72%] sm:min-w-[82%]  xs:min-w-[92%] ml-5
                 opacity-250 bg-no-repeat flex justify-end  flex-col ' data-aos="fade-up"
                 data-aos-duration="3000">
                    <div  className='text-white flex flex-col justify-center items-center mb-20' >
                          <h1  className='font-bold text-2xl'  >Molly Thomas</h1>
                    <h3   className='font-bold py-5' >Fitness Instructor</h3 >
                    </div>
             
                </div>
            </div>

            <Link href='/about
' >
            <button className='text-body border-2 border-body my-5 px-4 py-1 hover:bg-body hover:text-white duration-700 mt-12 mb-22' >
           View All
        </button>
            </Link>
        </div>
      
    </div>
  )
}

export default Team
