import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("email",email)
      const response = await axios.post('/api/email',formData);
      if(response.data.success){
        toast.success(response.data.msg);
        setEmail("");
      }
      else{
        toast.error("Error")
      }
  }

  return (
    <div className='py-10 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto size-14'/>
         <button className=' flex items-center gap-2 font-medium py:1 px:3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] bg-blue-50'>
         Get Started <Image src={assets.arrow} alt=''/>
          </button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>I am excited to introduce my latest project, a dynamic and user-friendly blog application designed to provide a seamless content creation and reading experience. This app allows users to easily create, edit, and delete blog posts with a rich text editor, making it simple to format and style content. The app features an intuitive user interface with a responsive design, ensuring accessibility across various devices. Additionally, it includes user authentication and authorization, allowing for secure management of personal blogs. With features like category tagging, comment sections, and a search function, this blog app is built to foster an engaging community of readers and writers.</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_black] ' action="" >
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none'  />
          <button type="submit" className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white bg-blue-50'>Subscribe</button>

        </form>
      
      </div>
      
    </div>
  )
}

export default Header
