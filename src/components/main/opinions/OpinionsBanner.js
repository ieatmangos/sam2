

import React, { useState } from 'react'
import './OpinionsBanner.css'
import { useSpring, animated } from 'react-spring'

const OpinionsBanner = () => {
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
        <div className='opinionsbanner' id='blog' onMouseOver={() => setToggle(true)}>
            <div className='opinionsbanner-h1'>Our Opinions<animated.div style={shake} className='opinionsbannercircle'></animated.div></div>
        </div>
    )
}

export default OpinionsBanner