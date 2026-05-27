import React from 'react'

export default function TiltTeext(props) {
  return (
    <div ref={props.tiltRef} id='titltDiv' className='mt-30'>
        <h1 className='text-[4vw] font-bold leading-[2.5vw]'>I AM <span className='text-gray-500'>A DARKMODE</span></h1>
        <h1 className='text-[6vw] font-bold leading-[6vw]'>DESIGNER</h1>
        <h1 className='text-[5vw] font-bold leading-[5vw]'>TO HIRE</h1>
    </div>
  )
}
