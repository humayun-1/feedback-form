import React, { useEffect } from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Input from '../Common/Input'
import Svgs from '../Common/Svgs'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from '../Common/Button'



const Eight = (props) => {
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
            <h1 className='text-3xl font-extrabold'>{Text.text}</h1>
            <div className='flex flex-col items-center gap-5'>
                <Input placeholder={Text?.options ? Text.options[0] : ''} />
                <Input type='number' placeholder={Text?.options ? Text.options[1] : ''} />
                <div className='bg-white rounded-lg px-2 py-[0.4rem] text-black input_num'>
                    <PhoneInput defaultCountry="PK"
                        onChange={() => { }}
                        placeholder={Text?.options ? Text.options[2] : ''} />
                </div>
                <div className='flex items-center justify-center gap-5 flex-wrap'>
                    <CircleIcon
                        onClick={() => {
                        }}
                        icon={
                            <Svgs.Male />
                        }
                        text={Text?.options ? Text.options[3] : ''}
                    />
                    <CircleIcon
                        onClick={() => {
                        }}
                        icon={
                            <Svgs.Female />
                        }
                        text={Text?.options ? Text.options[4] : ''}
                    />
                </div>
                <Button onClick={
                    () => {
                        handleChange()
                    }
                } text='Submit' />
            </div>
        </div>
    )
}

export default Eight