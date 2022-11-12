import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className='px-6 py-2 bg-white rounded-lg text-[#9C4183]'>{props.text}</button>
    )
}

export default Button