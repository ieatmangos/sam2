import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
// import './RecentBox.css'
import Fade from 'react-reveal'


const RecentBox = (props) => {
    const [state, set] = useState(false)
    const recentboxStyle = {
        height: '35vw',
        width: '40vw',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 8fr 1fr',
        margin: '10px',
        marginTop: props.props.rightSide ? '20px' : '10px',
        textAlign: 'left',
        background: 'white',
        backgroundImage: `url(${props.props.image}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const textStyle = useSpring({
        from: {
            position: 'absolute',
            color: 'white',
            opacity: 0,
            zIndex: 1,
            background: 'white',
            height: '25vw',
            width: '35vw',
            paddingTop: '10vw',
            paddingLeft: '5vw'
        },
        to: {
            opacity: state ? 1 : 0,
            background: props.props.color


        }
    })


    return (
        <Fade up>
            <div className='recentbox' style={recentboxStyle} onMouseOver={() => set(true)} onMouseLeave={() => set(false)}>
                {console.log(props.props.rightSide)}
                <animated.div style={textStyle}><h1>{props.props.company}</h1><h3>{props.props.work}</h3><p>{props.props.text}</p></animated.div>

            </div>
        </Fade>
    )
}

export default RecentBox
