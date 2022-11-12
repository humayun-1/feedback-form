import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Input from '../Common/Input'
import Svgs from '../Common/Svgs'
import 'react-phone-number-input/style.css'
import Button from '../Common/Button'



const Eight = (props) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }
    return (
        <div className='slide-in-right  flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>Any Suggestions?</h1>
            <div className='flex flex-col items-center gap-5'>
                <div className='p-4 bg-white rounded-lg relative pb-[3rem]'>
                    <textarea className='resize-none outline-none text-[#555555]' cols="30" rows="6" placeholder='Write Something Here...'></textarea>
                    <div className='absolute bottom-2 right-2 flex items-center gap-3'>
                        <div className='cursor-pointer'>
                            <Svgs.Camera />
                        </div>

                        <div className='cursor-pointer'>
                            <Svgs.Mic />
                        </div>
                    </div>
                </div>
                <Button onClick={handleChange} text='Next' />
            </div>
        </div>
    )
}

export default Eight