import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Lang = (props) => {
    const handleChange = (param) => {
        props.setLanguage(param)
        props.setActive(props.Active + 1)
    }
    return (
        <div className='slide-in-right flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>Please select your language?</h1>
            <h1 className='text-3xl font-extrabold urdu'>زبان کا انتخاب کیجیے۔</h1>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                <CircleIcon
                    onClick={() => {
                        handleChange('EN')
                    }}
                    icon={<div className='text-[#555555] font-semibold'>English</div>}
                />
                <CircleIcon
                    onClick={() => {
                        handleChange('UR')
                    }}
                    icon={<div className='text-[#555555] font-semibold'>اردو</div>}
                />
            </div>
        </div>
    )
}

export default Lang