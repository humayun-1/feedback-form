import React from 'react'

const Input = (props) => {
    return (
        <input type={props.type ? props.type : 'text'}
            className='min-w-[20rem] border rounded-md text-sm outline-none lg:px-4 px-2 lg:py-3 py-[0.6rem] placeholder:text-[#A1A1A1] text-[#101928] focus:border-[#8f8f8f] ease-in transition-all bg-white'
            placeholder={props.placeholder} />
    )
}

export default Input