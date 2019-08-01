import React, { useState, useEffect } from 'react'
import './Jumbo.css'
import arrow from '../../../images/arrow.svg'
import { useSpring, animated } from 'react-spring'



const Jumbo = () => {
    // const [scrolled, set] = useState(4.5)
    // const shake = useSpring({
    //     from: {
    //         transform: 'translateX(-100px)'
    //     },
    //     to: {
    //         transform: 'translateX(0px)'
    //     },
    //     config: {

    //         friction: '20',
    //         mass: '2',
    //         tension: '300'
    //     },

    // })
    const bounce = useSpring({
        from: {
            transform: 'translateY(20px)'
        },
        to: {
            transform: 'translateY(0px)'
        },
        config: {

            friction: '4',
            mass: '2',
            tension: '200'
        },
        delay: 1000

    })



    return (
        <div className='jumbo'>
            <div className='jumbo-h1'><h1>Welcome to Boutique Digital.</h1>
                <h1 style={{ marginTop: window.innerWidth > 800 ? '100px' : '40px' }}> We’re a boutique digital marketing & design agency focused on driving results and solving business problems. We love doing great work with good people.</h1></div>

            {/* <animated.div className='circle' style={shake} ></animated.div> */}
            {/* <animated.div className='circle' style={follow} ></animated.div> */}

            <animated.div className='arrow' style={bounce}><img src={arrow}></img></animated.div>
        </div>
    )
}

export default Jumbo

