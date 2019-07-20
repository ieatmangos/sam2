import React, { useState, useEffect } from 'react'
import './Jumbo.css'
import arrow from '../../../images/arrow.svg'
import { useSpring, animated } from 'react-spring'



const Jumbo = () => {
    const [scrolled, set] = useState(4.5)
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        const currentScrollPos = window.pageYOffset
        const windowWidth = window.innerWidth

        set(currentScrollPos);
    }

    const follow = useSpring({
        from: {
            transform: 'translate3d(0px,0px,0px)',
            position: 'relative',

        },
        to: {
            transform: window.innerWidth > 800 ? `translate3d(${scrolled}px,500%,0px)` : `translate3d(${scrolled}px,230%,0px)`,
        }
    })


    return (
        <div className='jumbo'>
            <div className='jumbo-h1'><h1>We are fucking badass people that do crazy shit.</h1></div>

            {/* <animated.div className='circle' style={shake} ></animated.div> */}
            <animated.div className='circle' style={follow} ></animated.div>

            <animated.div className='arrow' style={bounce}><img src={arrow}></img></animated.div>
        </div>
    )
}

export default Jumbo

