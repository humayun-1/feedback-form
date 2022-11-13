import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Nine = (props) => {
    const [checked, setchecked] = useState(false)

    const handleChange = (param) => {
        setchecked(!checked)
        props.setActive(0)
    }

    return (
        <div className={`slide-in-elliptic-top-fwd flex flex-col gap-6 items-center bg-pink-500/30 backdrop-blur-[6px] w-fit mx-auto p-[3rem] rounded-2xl`}>
            <h1 className='text-[2.4rem] font-extrabold'>
                Thank you, for your feedback.
            </h1>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-extrabold'>
                    The feedback has been submitted.
                </h1>
            </div>
            <button onClick={handleChange} className='hover:bg-[#D55AA3] border border-white px-6 py-2 rounded-lg transition-all bg-white text-[#D55AA3] ease-out font-semibold text-lg hover:text-white'>Fill the Next form</button>
        </div>
    )
}

export default Nine