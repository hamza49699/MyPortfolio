import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    
    <div
    
       id="hero"
       className='min-h-screen bg-no-repeat bg-[url(/profile1.jpeg)] bg-cover m-10 '
       style={{ backgroundSize: "35%", backgroundPosition: "left 100px" }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='lg:block'></div>
        <div className='flex justify-center items-center text-[80px] sm:text-[80px] font-bold leading-tight p-4 md:p-10'>
          
          <div className='animate-bounce'>
          
  
            <p>THIS IS</p>
            <p>HAMZA</p>
            <p>JAVED</p>
           
            
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Hero;