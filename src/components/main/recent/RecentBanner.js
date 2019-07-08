import React, { useState } from 'react'
import './RecentBanner.css'
import { useSpring, animated } from 'react-spring'

const RecentBanner = () => {
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
        <div className='recentbanner' onMouseOver={() => setToggle(true)}>
            <div className='recentbanner-h1'>Our Recent Work<animated.div style={shake} className='recentbannercircle'></animated.div></div>
        </div>
    )
}

export default RecentBanner