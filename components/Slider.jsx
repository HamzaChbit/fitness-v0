'use client'
import React, { useState } from 'react'
import {AiOutlineArrowRight,AiOutlineArrowLeft}from 'react-icons/ai'




const Slider = () => {


    const Sliders = [
        {
            desc: '“Im a testimonial. Click to edit me and add text that says something nice about you and your services.”',
            title: 'Lobster',
          },
          {
            desc: 
           ' “Im a testimonial. Click to edit me and add text that says something nice about you and your services.“ ',
            title: 'Sushi',
          },
          {
            desc: 
            '“Im a testimonial. Click to edit me and add text that says something nice about you and your services.”',
            title: 'Pasta',
          },
    
    ] 

    const [Caret,setCaret] = useState(0);
    const prevSliders= () =>{
     
       const Index = Caret === 0 ;
       const CheckIndex = Index ? Sliders.length - 1 : Caret - 1
       setCaret(CheckIndex)
    }
    const NextSliders= () =>{
        const Index = Caret === Sliders.length - 1  ;
        const CheckIndex = Index ? 0: Caret + 1;
        setCaret(CheckIndex)
    }
    const goToSlide = (slideIndex) => {
      setCaret(slideIndex)
    }






  return (
    <div className='w-full h-[50vh]   box-border flex justify-center items-center'data-aos="flip-right" >
       < AiOutlineArrowLeft size={30} className='mx-10 hover:text-hover '  onClick={prevSliders} />
        <div className='mx-auto p-5 w-[50%] flex items-center flex-col cursor-pointer ' >

            <h2 className='text-2xl font-medium   hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden ' >
   {Sliders[Caret].desc}
           
</h2>

<h2 className='text-2xl font-medium mt-5 '  > {Sliders[Caret].title}</h2>
<div  className='flex items-center mt-10 justify-center gap-2      ' >
  {Sliders.map((_,i)=>(
    <div key={i} onClick={()=>goToSlide(i)}  className={`w-2 h-2 bg-black rounded-full  ${Caret === i ? 'p-1': 'bg-opacity-50'}`} />

  
  ))}

</div>

        </div>
        < AiOutlineArrowRight   onClick={NextSliders}  size={30} className='mx-10 hover:text-hover duration-700 cursor-pointer '/>
      
    </div>
   
  )
}

export default Slider
