import React, { useState } from 'react'

const CircleIcon = (props) => {
    return (
        <div onClick={props.onClick} className='flex items-center flex-col gap-2 cursor-pointer'>
            <div className={`bg-white transition-all hover:bg-[#ffd4ef] ${props.size ? props.size : 'h-[8rem] w-[8rem]'} rounded-full flex items-center justify-center`}>
                {props.icon}
            </div>
            {props.text && <p className=''>{props.text}</p>}
        </div>
    )
}

export default CircleIcon