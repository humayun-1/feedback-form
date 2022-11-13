import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Intro = (props) => {
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }
    return (
        <div className='slide-in-elliptic-top-fwd flex flex-col gap-6 items-center bg-pink-500/30 backdrop-blur-[6px] w-fit mx-auto p-[3rem] rounded-2xl'>
            <h1 className='text-3xl font-extrabold'>
                Hi, how was your experience at Savour Foods today?
            </h1>
            <h1 className='text-3xl font-extrabold font-sans'>
                -سلام, آج آپ کا سیور کا تجربہ کیسا رہا
            </h1>
            <button className='hover:bg-[#D55AA3] border border-white px-6 py-2 rounded-lg transition-all bg-white text-[#D55AA3] ease-out font-semibold text-lg hover:text-white'>Quick Start</button>
        </div>
    )
}

export default Intro