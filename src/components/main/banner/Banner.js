

import React, { useState } from 'react'
import './Banner.css'
import { useSpring, animated } from 'react-spring'

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
            <div className='banner-h1'>What We Do<animated.div style={shake} className='bannercircle'></animated.div></div>
        </div>
    )
}

export default Banner