import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const HowManyTimes = (props) => {
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }
    const [Text, setText] = useState([]);
    useEffect(() => {
        setText(props.Language)
    }, [props.Language])


    return (
        <div className='slide-in-right flex flex-col gap-6 items-center'>
            <h1 className={`text-3xl font-extrabold ${Text?.lang == 'UR' && 'urdu'}`}>{Text.text}</h1>
            <div className='grid md:grid-cols-2 gap-6 flex-wrap'>
                <div className="flex items-center gap-2">
                    <input onChange={handleChange} className="h-5 w-5 accent-[#d562a7]" type="checkbox" value="" id="checkbox_1" />
                    <label htmlFor="checkbox_1" className={`text-lg cursor-pointer ${Text?.lang == 'UR' && 'urdu'}`}>
                        {Text?.options ? Text.options[0] : ''}
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <input onChange={handleChange} className="h-5 w-5 accent-[#d562a7]" type="checkbox" value="" id="checkbox_2" />
                    <label htmlFor="checkbox_2" className={`text-lg cursor-pointer ${Text?.lang == 'UR' && 'urdu'}`}>
                        {Text?.options ? Text.options[1] : ''}
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <input onChange={handleChange} className="h-5 w-5 accent-[#d562a7]" type="checkbox" value="" id="checkbox_3" />
                    <label htmlFor="checkbox_3" className={`text-lg cursor-pointer ${Text?.lang == 'UR' && 'urdu'}`}>
                        {Text?.options ? Text.options[2] : ''}
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <input onChange={handleChange} className="h-5 w-5 accent-[#d562a7]" type="checkbox" value="" id="checkbox_4" />
                    <label htmlFor="checkbox_4" className={`text-lg cursor-pointer ${Text?.lang == 'UR' && 'urdu'}`}>
                        {Text?.options ? Text.options[3] : ''}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default HowManyTimes