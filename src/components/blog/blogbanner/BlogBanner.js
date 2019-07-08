

import React, { useState } from 'react'
import './BlogBanner.css'
import { useSpring, animated } from 'react-spring'

const BlogBanner = () => {
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
        <div className='blogbanner' onMouseOver={() => setToggle(true)}>
            <div className='blogbanner-h1'>Blog<animated.div style={shake} className='blogbannercircle'></animated.div></div>
        </div>
    )
}

export default BlogBanner