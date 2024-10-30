import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";



const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
    <div className='grid md:grid-cols-2 gap-10'>
      <div className='space-y-8'>
        <h2 className='text-5xl'>GET IN TOUCH</h2>
        <p className='text-yellow-400 text-[18px] pt-2'>
          PLEASE FILL THIS FORM TO CONTACT ME 
        </p>
        <div className='flex gap-3 items-center'>
       < MdOutlineMailOutline size={30} />Hamzakhan.hk1994@gmail.com
        </div>

        <div className='flex gap-3 items-center'>
        <BsTelephoneInbound size={30} />0340-8649699
        </div>
      </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-yellow-400' id='name' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email" >Email</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-yellow-400' id='email' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="msg">Enter Your Message</label>
            <textarea 
            className=' bg-transparent border border-yellow-400' id='msg' rows={8} > </textarea>
          </div>
          <button className='bg-yellow-400 p-1  hover:bg-white text-black font-bold '>Send now</button>
        </div>
        </div>
        </div>
  )
}

export default Contact
