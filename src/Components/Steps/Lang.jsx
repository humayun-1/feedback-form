import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Lang = (props) => {
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }
    return (
        <div className='slide-in-right flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>Was this your first visit to Savour Foods?</h1>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={<Svgs.Yes />}
                />
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={<Svgs.No />}
                />
            </div>
        </div>
    )
}

export default Lang