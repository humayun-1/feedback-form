import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Two = (props) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (params) => {
        props.setActive(props.Active + 1)
    }

    const [Text, setText] = useState([]);
    useEffect(() => {
        setText(props.Language)
    }, [props.Language])


    return (
        <div className='slide-in-right  flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>{Text?.text}</h1>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/social.png`} className='w-[3rem]' />
                    }
                    text={Text?.options ? Text.options[0] : ''}
                />
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/friendsnfamily.png`} className='w-[3rem]' />
                    }
                    text={Text?.options ? Text.options[1] : ''}
                />
            </div>
        </div>
    )
}

export default Two