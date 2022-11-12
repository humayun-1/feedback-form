import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Three = (props) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }
    return (
        <div className='slide-in-right  flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>What did you like about your visit to Savour Foods?</h1>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/quality.png`} className='w-[3rem]' />
                    }
                    text='Quality'
                />

                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <Svgs.Service />
                    }
                    text='Service'
                />

                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <Svgs.Cleanliness />
                    }
                    text='Cleanliness'
                />

                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/food.png`} className='w-[3rem]' />
                    }
                    text='Food'
                />
            </div>
        </div>
    )
}

export default Three