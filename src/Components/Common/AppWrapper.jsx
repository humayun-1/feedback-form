import React, { useEffect } from 'react'
import Svgs from './Svgs'

const AppWrapper = (props) => {
    useEffect(() => {
        let main_bg_cover = document.querySelector('.main-bg-cover');
        main_bg_cover.style.cssText = `min-height:${window.innerHeight}px;`;
    }, [])

    return (
        <div className='main-bg-cover flex flex-col text-white'>
            <div className='container mx-auto text-center flex-1 flex flex-col'>
                <div className='flex flex-col gap-8 justify-between flex-1 px-[1rem]'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/SavourLogo.png`} className="h-[7rem] mx-auto" />
                    </div>
                    <div className='overflow-hidden'>
                        {props.children}
                    </div>
                    <div className='flex flex-col gap-2 pb-[2rem]'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/footer-hand.png`} className="w-[14rem] mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppWrapper