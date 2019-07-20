

import React, { useState, useEffect } from 'react'
import './Banner.css'
import { useSpring, animated } from 'react-spring'
import Fade from 'react-reveal'

const Banner = () => {
    const [isToggled, setToggle] = useState(false)
    const shake = useSpring({
        transform: isToggled ? 'translateX(0px)' : 'translateX(300px)',
        opacity: isToggled ? '1' : '0',

        config: {

            friction: '25',
            mass: '2',
            tension: '150'
        },

    })


    return (
        <div className='banner' onMouseOver={() => setToggle(true)}>
            <div className='banner-h1'>What We Do
            <Fade right><div className='bannercircle'></div></Fade></div>
        </div>
    )
}

export default Banner