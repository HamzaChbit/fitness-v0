import React from 'react'
import { FaFacebookF} from 'react-icons/fa';
import { AiOutlineTwitter} from 'react-icons/ai';
const Footer = () => {
  return (
    <div  className='
    w-full mx-auto flex justify-center items-center flex-col  ' data-aos="fade-up">
        <div className='flex flex-row gap-5 py-5 cursor-pointer' >
        <FaFacebookF size={25} />
<AiOutlineTwitter  size={25}/>
        </div>
        <div>
            <p  className='py-5 text-sm font-light' >©2023 by F I T T. Powered and secured by Wix</p>
        </div>

      
    </div>
  )
}

export default Footer
