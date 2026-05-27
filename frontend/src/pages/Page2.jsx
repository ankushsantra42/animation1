import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

export default function Page2() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(function(){
        gsap.from(".rotatedText", {
          transform: "rotateX(-90deg)",
          opacity: 0,
          duration: 3,
          stagger: 1,
          scrollTrigger:{
            trigger: ".rotatedText",
            start: "top 60%",
            end: "top -200%",
            scrub: 1
          }
        });
    })
  return (
    <div
      id="section2"
      className=" w-screen bg-white text-black p-20 pb-30 text-center "
    >
      <h3 className="text-gray-600 text-center text-2xl font-light">
        welcome to my portfolio
      </h3>
      <div id="rotate1" className="rotatedText mt-20">
        <h1 className="text-[16vw] font-bold uppercase  leading-[17vw] font-['Bebas_Neue']">
          impactful
        </h1>
      </div>
      <div id="rotate2" className="rotatedText">
        <h1 className="text-[16vw] font-bold uppercase leading-[17vw] font-['Bebas_Neue']">
          design
        </h1>
      </div>
      <div id="rotate3" className="rotatedText">
        <h1 className="text-[16vw] font-bold uppercase leading-[17vw] font-['Bebas_Neue']">
          is the
        </h1>
      </div>
      <div id="rotate4" className="rotatedText">
        <h1 className="text-[16vw] font-bold uppercase leading-[17vw] font-['Bebas_Neue']">
          design
        </h1>
      </div>
      <div id="rotate5" className="rotatedText">
        <h1 className="text-[16vw] font-bold uppercase leading-[17vw] font-['Bebas_Neue']">that</h1>
      </div>
      <div id="rotate6" className="rotatedText">
        <h1 className="text-[16vw] font-bold uppercase leading-[17vw] font-['Bebas_Neue']">work</h1>
      </div>
      <div className="h-[17vw] w-full bg-white  "></div>
    </div>
  );
}
