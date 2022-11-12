import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Two = (props) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (params) => {
        props.setActive(props.Active + 1)
    }
    return (
        <div className='slide-in-right  flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>How did you hear about us?</h1>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/social.png`} className='w-[3rem]' />
                    }
                    text='Social Media'
                />
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/friendsnfamily.png`} className='w-[3rem]' />
                    }
                    text='Friends & Family'
                />
            </div>
        </div>
    )
}

export default Two