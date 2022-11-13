import React from 'react'
import { useState, useEffect } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Five = (props) => {
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }

    const [Text, setText] = useState([]);
    useEffect(() => {
        setText(props.Language)
    }, [props.Language])

    return (
        <div className='slide-in-right flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>{Text?.text}</h1>
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

export default Five