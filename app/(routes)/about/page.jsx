import Image from 'next/image'
import React from 'react'

const PageAbout = () => {
  return (
    <>
    <div className='bg-background w-full mx-auto h-screen   ' >
<div className='flex justify-center items-center'data-aos="fade-down" >

<div className='w-[80%] mx-auto my-5 py-8 bg-course-six flex flex-col justify-center items-center h-[80vh]   bg-no-repeat bg-cover  ' > 
<div className='flex flex-col justify-end items-center py-5 ' >
    <h1 className='text-white font-bold text-4xl'>Who We Are?</h1>
    <p className='text-xl mt-12 font-medium text-white w-[70%]' >Im a paragraph. Click here to add your own text and edit me. Is easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
</div>

</div>
</div>
</div>

<div  className='mt-5   mx-auto h-auto  max-w-7xl flex  flex-wrap    gap-5 '>
  <div className='flex  flex-col justify-center items-center px-5 ' data-aos="fade-up">
    <div>
       <Image  width={350 } height={400} src='/image/2e2a49_0beae01326244da9936b9bdec997e578_mv2_d_2598_2205_s_2.webp' alt='image'/>
    </div>
   
    <h1 className='text-body text-2xl font-bold py-4'>Molly Thomas</h1>
    <h3 className='text-black text-xl font-bold py-2'>Founder & Lead Instructor</h3>
   
   
  </div>
  <div className='flex flex-col justify-center items-center  px-5 ' data-aos="fade-up">
    <Image  width={350 } height={400} src='/image/2e2a49_3a098004e4d6421985ef27877c26bb38_mv2_d_2598_2205_s_2.webp' alt='image'/>
    <h1 className='text-body text-2xl font-bold py-4'>Alexander Watts</h1>
    <h3 className='text-black text-xl font-bold py-2'>FLead Instructor</h3>
  
  
  </div>
  <div className='flex flex-col justify-center items-center px-5 'data-aos="fade-up" >
    <Image  width={350 } height={400} src='/image/7.webp'alt='image' />
    <h1 className='text-body text-2xl font-bold py-4'>Ella Klein</h1>
    <h3 className='text-black text-xl font-bold py-2'>Fitness Instructor</h3>
  
   
  </div>
  <div className='flex  flex-col justify-center items-center px-5 ' data-aos="fade-up">
    <Image  width={350 } height={400} src='/image/8.webp' alt='image'/>
    <h1  className='text-body text-2xl font-bold py-4'  >Eric Robbins</h1>
    <h3 className='text-black text-xl font-bold py-2'>Sports Therapist</h3>
   
  </div>
  <div className='flex flex-col justify-center items-center px-5  ' data-aos="fade-up">
  
    <Image  width={350 } height={400} src='/image/2e2a49_dd367b07e33c4bf1b9777f2fe08cd512_mv2_d_2598_2205_s_2.webp'alt='image' />


    <h1 className='text-body text-2xl font-bold py-4'>Nora Cortez</h1>
    <h3 className='text-black text-xl font-bold py-2'>Fitness Instructor</h3>
  
  </div>

  <div className='flex flex-col justify-center items-center  px-5' data-aos="fade-up">
  
       <Image  width={350 } height={450} src='/image/9.webp'  alt='image'/>

   
    <h1 className='text-body text-2xl font-bold py-4'>
Adam Pattontor</h1>
    <h3 className='text-black text-xl font-bold py-2'>CEO & Lead Instructor</h3>
   
  </div>


    
</div>



    </>
  )
}

export default PageAbout