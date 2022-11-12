import React from 'react'
import { useState } from 'react'
import CircleIcon from '../Common/CircleIcon'
import Svgs from '../Common/Svgs'

const Six = (props) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (param) => {
        props.setActive(props.Active + 1)
    }
    return (
        <div className='slide-in-right  flex flex-col gap-6 items-center'>
            <h1 className='text-3xl font-extrabold'>How likely are you to recommend us to friends & family?</h1>
            <div className='flex items-center justify-center gap-5'>
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={<Svgs.FaceHappy />}

                />
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={<Svgs.FaceSatisfied />}
                />
                <CircleIcon
                    onClick={() => {
                        handleChange()
                    }}
                    icon={<Svgs.FaceSad />}
                />
            </div>
        </div>
    )
}

export default Six