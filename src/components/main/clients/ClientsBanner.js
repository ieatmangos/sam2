import React, { useState } from 'react'
import './ClientsBanner.css'
import { useSpring, animated } from 'react-spring'

const ClientsBanner = () => {
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
        <div className='clientsbanner' onMouseOver={() => setToggle(true)}>
            <div className='clientsbanner-h1'>Our Clients<animated.div style={shake} className='clientscircle'></animated.div></div>
        </div>
    )
}

export default ClientsBanner
