import React, { useEffect } from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Three = (props) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }

    const [Text, setText] = useState([]);
    useEffect(() => {
        setText(props.Language)
    }, [props.Language])

    return (
        <div className='slide-in-right  flex flex-col gap-6 items-center'>
            <h1 className={`text-3xl font-extrabold ${Text?.lang == 'UR' && 'urdu'}`}>{Text?.text}</h1>
            <div className={`flex items-center justify-center gap-5 flex-wrap ${Text?.lang == 'UR' && 'urdu'}`}>
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/quality.png`} className='w-[5rem]' />
                    }
                    text={Text?.options ? Text.options[0] : ''}
                />

                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <Svgs.Service />
                    }
                    text={Text?.options ? Text.options[1] : ''}
                />

                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <img src={`${process.env.PUBLIC_URL}/assets/images/food.png`} className='w-[5rem]' />
                    }
                    text={Text?.options ? Text.options[2] : ''}
                />

                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={
                        <Svgs.Cleanliness />
                    }
                    text={Text?.options ? Text.options[3] : ''}
                />
            </div>
        </div>
    )
}

export default Three