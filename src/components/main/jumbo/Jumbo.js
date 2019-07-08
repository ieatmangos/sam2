import React from 'react'
import './Jumbo.css'
import arrow from '../../../images/arrow.svg'
import { useSpring, animated } from 'react-spring'



const Jumbo = () => {
    const shake = useSpring({
        from: {
            transform: 'translateX(-100px)'
        },
        to: {
            transform: 'translateX(0px)'
        },
        config: {

            friction: '20',
            mass: '2',
            tension: '300'
        },

    })
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
            <div className='jumbo-h1'><h1>We are fucking badass people that do crazy shit.</h1></div>

            <animated.div className='circle' style={shake} ></animated.div>

            <animated.div className='arrow' style={bounce}><img src={arrow}></img></animated.div>
        </div>
    )
}

export default Jumbo

