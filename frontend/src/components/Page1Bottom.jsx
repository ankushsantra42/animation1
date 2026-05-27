import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

export default function Page1Bottom() {
    useGSAP(function(){
        gsap.to("#page1-bottom",{
            rotate:360,
            duration:5,
            ease:"linear",
            repeat:-1,
            yoyo:true,
            // delay:1
        })
    })
  return (
    <div className="w-full absolute left-0 bottom-0 p-22  flex items-end justify-between">
         
      <div className=''>
        <h2 className="text-[1.5vw] font-light leading-[1.5vw]">
          BRAND DESIGN
        </h2>
        <h3 className="text-[1.5vw] font-light leading-[1.5vw]">
          website design
        </h3>
      </div>

      <div id='page1-bottom'>
        <img className='h-17 w-17 rounded-[50%] object-cover'
          src="https://images.unsplash.com/photo-1594152645879-6cdf0c59fdd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYWxsJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
    </div>
  );
}
