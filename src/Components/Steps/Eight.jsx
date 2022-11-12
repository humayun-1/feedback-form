import React from 'react'
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
        alert('Submitted Successfully')
        props.setActive(1)
    }
    return (
        <div className='slide-in-right  flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>Please add your details</h1>
            <div className='flex flex-col items-center gap-5'>
                <Input placeholder='Name' />
                <Input type='number' placeholder='Age' />
                <div className='bg-white rounded-lg px-2 py-[0.4rem] text-black input_num'>
                    <PhoneInput defaultCountry="PK"
                        onChange={() => { }}
                        placeholder="Enter phone number" />
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <CircleIcon
                        onClick={() => {
                        }}
                        icon={
                            <Svgs.Male />
                        }
                        text='Male'
                    />
                    <CircleIcon
                        onClick={() => {
                        }}
                        icon={
                            <Svgs.Female />
                        }
                        text='Female'
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