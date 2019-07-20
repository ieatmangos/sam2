import React, { useState } from 'react'
import './RecentBanner.css'
import { useSpring, animated } from 'react-spring'
import Fade from 'react-reveal'

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
        <div className='recentbanner' id='work' onMouseOver={() => setToggle(true)}>
            <div className='recentbanner-h1'>Our Recent Work<Fade right><div style={shake} className='recentbannercircle'></div></Fade></div>
        </div>
    )
}

export default RecentBanner