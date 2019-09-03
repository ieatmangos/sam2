import React, { useState } from 'react'
import "./GetInTouch.css"
import { useSpring, animated } from 'react-spring'
export default function GetItTouch(props) {
    const [hovered, setHovered] = useState(false)
    const hoverStyle = useSpring({
        from: { background: 'white', },
        to: {
            background: hovered ? "#49c5b6" : 'white',
            border: hovered ? "1px solid #49c5b6" : "1px solid black",
            color: hovered ? 'white' : 'black'
        }
    })
    const hoverStyleTWO = useSpring({
        from: { background: 'white', },
        to: {
            background: 'white',
            border: props.props ? "1px solid #49c5b6" : "1px solid black",
            color: props.props ? '#49c5b6' : 'black'
        }
    })




    return (
        <animated.div
            style={!props.isFirst ? { ...hoverStyleTWO } : { ...hoverStyle }}
            className='GetItTouch'
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <p className='button-text'>GET IN TOUCH   </p>     </animated.div>
    )
}
