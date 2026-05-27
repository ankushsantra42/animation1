import React, { useRef, useState } from "react";
import TiltTeext from "../components/TiltTeext";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Page1() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const tiltRef = useRef(null)
  const handleMouseMove = (e) => {
    setCursorX((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/8);
    setCursorY((e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/5);
    console.log(cursorX, cursorY);
    // tiltRef.current.style.transform = `rotateX(${cursorY}deg) rotateY(${cursorX}deg)`
  };

  useGSAP(function(){
    gsap.to(tiltRef.current,{
        transform : `rotateX(${cursorY}deg) rotateY(${cursorX}deg)`,
        duration : 2
    })
  },[cursorX, cursorY])

  return (
    <div
      onMouseMove={handleMouseMove}
      id="page1"
      className="h-screen w-screen p-7 bg-white "
    >
      <div
        id="page1-in"
        className="h-full w-full p-15 rounded-[50px] bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8OGslMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center"
      >
        <div className="h-20 w-20 ml-5">
          <i className="ri-share-circle-fill text-5xl"></i>
        </div>
        <TiltTeext tiltRef={tiltRef}/>
        {/* <div id="titltDiv" ref={tiltRef} className="mt-30">
          <h1 className="text-[4vw] font-bold leading-[2.5vw]">
            I AM <span className="text-gray-500">A DARKMODE</span>
          </h1>
          <h1 className="text-[6vw] font-bold leading-[6vw]">DESIGNER</h1>
          <h1 className="text-[5vw] font-bold leading-[5vw]">TO HIRE</h1>
        </div> */}
        <Page1Bottom />
      </div>
    </div>
  );
}
