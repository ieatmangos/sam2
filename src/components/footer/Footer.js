import React, { useState, useEffect } from 'react'
import { useTrail, animated, useSpring } from 'react-spring'
import './Footer.css'
const items = ['G', 'e', 't', 'I', 'n', ' ', 'T', 'o', 'u', 'c', 'h']
const config = { mass: 2, tension: 300, friction: 100 }


function Footer() {
    const [state, set] = useState(false)
    const [one, setOne] = useState(true)

    const trail = useTrail(items.length, {
        from: { opacity: 0, x: 20, height: 0, display: 'inline-flex', flexWrap: 'no-wrap', color: 'white', fontSize: window.innerWidth > 800 ? '2em' : '1em', letterSpacing: '10px', margin: '0px' },
        to: async next => {
            while (one) {
                await next({ opacity: 1, x: -12, height: 0 })
                await next({ opacity: 1, x: -12.1, height: 0 })
                await next({ opacity: .7, x: 10, height: 0 })
                await next({ opacity: .7, x: 10.1, height: 0 })
                await next({ opacity: 1, x: -12, height: 0 })
            }

        }, config


    })
    const btnstyle = useSpring({
        from: {
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)',
            height: window.innerWidth > 800 ? '2.5vw' : '8vw',
            width: window.innerWidth > 800 ? '2.5vw' : '8vw',
            borderRadius: '50%',

            background: '#49c5b6',
            margin: 'auto',
            position: 'relative',
            top: window.innerWidth > 800 ? '5%' : '40%'
        },
        to: async next => {
            while (one) {
                await next({ opacity: .8, transform: 'translate3d(0px, 10px, 0px)', config: { mass: 5, tension: 680 } })
                await next({ opacity: 1, transform: 'translate3d(0px, 6px, 0px)', config: { mass: 1, tension: 600, friction: 40 } })
            }
        }
    })
    function handleBtn() {
        var elmnt = document.getElementById('contact');
        elmnt.scrollIntoView();
    }


    return (
        <div className='footer' >
            <div className='footer-center' style={{ position: 'absolute', width: '100vw', top: '30%' }}>
                <div style={{ width: '80%', textAlign: 'center', margin: 'auto' }}>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={items[index]}
                            className='trails-text'
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(${x}px, 0px,0 )`) }}
                        >
                            <animated.div style={{ height }}>{items[index]}</animated.div>

                        </animated.div>

                    ))}
                </div>



            </div>

            <animated.div style={btnstyle} onClick={handleBtn}></animated.div>


            <div className='footer-right'>

                <h1> Company </h1>
                <i class="fa fa-facebook-f"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-twitter"></i>

            </div>
            <div className='mango'><p>Website by Eat Mangos</p></div>
        </div>
    )
}

export default Footer
