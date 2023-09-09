import React from 'react'
import shoe from '../images/hero-image.png'
import flipkart from '../images/flipkart.png'
import amazon from '../images/amazon.png'

function Home() {
  return (
    <div className="main flex ">
        <div className='mt-8'>
        <div className="heading uppercase ml-28">
               <h1 className='text-7xl font-extrabold'>Your Feet <br /> Deserve <br /> the best</h1>

               <p className='text-left text-sm font-normal mt-5'>
                Your feet deserve the best and we are here to <br /> help  you with our shoes.Your feet deserve <br /> the best and we are here to help you with our <br /> shoes.
               </p>
              </div>
        <div className='flex gap-6 ml-28 mt-7'>
        <button className='px-2 py-1 bg-red-600 font-semibold text-white hover:scale-95'>Shop Now</button>
         <button className='px-2 font-semibold py-1 bg-transparent border border-gray-700 text-gray-700 hover:scale-95'>Category</button>
        </div>
        <div className='ml-28 mt-5'>
            <p className=' font-light'>Also Available On</p>
           <div className='flex gap-3 mt-3'>
           <img src={flipkart} className='h-5' alt="" />
            <img src={amazon} className='h-5' alt="" />
           </div>
        </div>
        </div>
            
            <div className='ml-16 mt-24'>
            <img src={shoe} className='h-96' alt="" />
            </div>
     
    </div>
  )
}

export default Home