'use client'
import Image from 'next/image'
import React, { useState  } from 'react'
import { FaFacebookF} from 'react-icons/fa';
import { AiOutlineTwitter , AiOutlineUser} from 'react-icons/ai';
import Link from 'next/link';
import { MdOutlineClose } from 'react-icons/md'

const NavBar = () => {

    const [showMenu,setShowMenu] =useState(false)

    function handlClick   ( ) {
  
        setShowMenu(false)

}



  return (
    <div  className='h-120 mx-auto max-w-7xl'data-aos="fade-down" >

        {/* top */}
        <div className='flex flex-row p-4  justify-between items-center' >

       
        <Link href='/'  className='flex flex-row p-4 ' >
            

            <div   >
                    <Image width={30} className='py-2' height={30} alt='logo' src="/image/c0c004_541330dfba3641328a9c416c91c59187_mv2.png" />      
            </div>
            <div className='px-3'>
                <h1 className='text-2xl font-bold' >F I T T</h1>
                <p className='text-md font-light' >Fitness Academy</p>
            </div>
            
        </Link>


        <div     className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-white cursor-pointer overflow-hidden group' onClick={()=>setShowMenu(true)} >
                <span  className='w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-black inline-flex transform translate-x-3   group-hover:translate-x-0 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-black inline-flex transform   translate-x-1  group-hover:translate-x-3 transition-all ease-in-out duration-300 ' ></span>

            </div>

 </div>
 {showMenu && (
    <div
    className=' fixed  mdl:hidden  w-[100%] top-0 left-0   h-screen  bg-white flex flex-col items-center'
     onClick={handlClick}  >
          
                  <MdOutlineClose  size={30}  className='text-3xl text-black right-4 top-2 absolute cursor-pointer hover:text-body  duration-300'  onClick={()=>setShowMenu(false)} />
                  <div  className='flex justify-between  flex-col items-center py-5   ' >
        
        <ul  className='font-medium flex text-2xl text-black flex-col gap-5 py-4 cursor-pointer  justify-center items-center'  >
            <Link  className='hover:text-body duration-300'  href='/'>HOME</Link>
            <Link  className='hover:text-body  duration-300'  href='/courses' >COURSES</Link>
            <Link className='hover:text-body   duration-300'  href='/faq' >FAQ</Link>
            <Link className='hover:text-body   duration-300' href='/about' >ABOUT</Link>
            <Link className='hover:text-body   duration-300'  href='/contact' >CONTACT</Link>
        </ul>
        <div className='flex flex-row py-5 gap-4  cursor-pointer' >
                    <FaFacebookF  size={25}  />
<AiOutlineTwitter  size={25}  />
        </div>
        <p  >+212 694977110</p>

                  </div>
               
        
         </div>
 )}







      <div  className='  hidden  mdl:block' >

    
        <div  className='flex justify-between  border-t-2  border-black     ' >
        
            <ul  className='font-light flex gap-5 py-2 cursor-pointer'  >
                <Link href='/'>HOME</Link>
                <Link  href='/courses' >COURSES</Link>
                <Link href='/faq' >FAQ</Link>
                <Link  href='/about' >ABOUT</Link>
                <Link href='/contact'>CONTACT</Link>
            </ul>
            <div  className='font-light flex gap-5 py-2 cursor-pointer   ' >
                <p className=' hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden ' >
1-800-000-000</p>
<FaFacebookF   className=' hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden ' />
<AiOutlineTwitter className=' hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden ' />
{/* <AiOutlineUser className='bg-red-500 rounded-full text-white     hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden  ' />
<p   className=' hidden  xxl:block xl:block lg:block  md:block mdl:block sm:hidden  xs:hidden ' >Login</p> */}


            </div>
        </div>
        </div>
       
    </div>
  )
}

export default NavBar