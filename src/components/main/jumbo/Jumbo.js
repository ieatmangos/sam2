import React, { useState, useEffect, Fragment } from 'react'
import './Jumbo.css'
import arrow from '../../../images/arrow.svg'
import { useSpring, animated } from 'react-spring'
import GetItTouch from '../../GetItTouch';

import SplitText from '../../../gsap/SplitText'
import { TweenMax, TimelineMax, SlowMo, Circ } from 'gsap'
import { Power3, } from 'gsap/TweenLite';

const Jumbo = () => {

    const tl = new TimelineMax({ paused: false })
    useEffect(() => {
        const titleText = new SplitText("#jumbo-title", { type: "chars words" })
        const restText = new SplitText("#jumbo-rest", { type: "words" })

        TweenMax.set(titleText, { opacity: 0 })
        tl
            .add(TweenMax.staggerFrom(titleText.words, 1, {
                stagger: { amount: .5 },
                scale: .5,
                rotationX: 80,
                transformOrigin: "100% 50%",
                paddingRight: window.innerWidth > 800 ? 20 : 2,
                opacity: 0,
                ease: Circ.easeIn

            }))
            .add(TweenMax.staggerFrom(restText.words, 1, {
                stagger: { amount: .5 },
                opacity: 0,
                y: 30,
            }))
            .add(TweenMax.from("#jumbo-cta", 2, { opacity: 0, y: 10 }), 3.5)
            .play()

    })

    return (
        <Fragment>
            <div className='jumbo'>
                <div className='jumbo-h1'>
                    <h1 style={{}}> <span id='jumbo-title' style={{ color: "#49c5b6", fontWeight: '700' }}>A Boutique Digital Agency</span><span id='jumbo-rest'> focused on driving results and solving business problems. We love doing great work with good people.</span></h1>
                </div>

                <div
                    id="jumbo-cta"
                    style={{
                        position: "absolute",
                        width: "100%",
                        marginTop: window.innerWidth > 800 ? '100px' : '350px',
                        // marginBottom: window.innerWidth > 800 ? '0px' : '100px;'
                    }}><GetItTouch isFirst={true} /></div>

            </div >

        </Fragment>
    )
}

export default Jumbo







{/* <animated.div className='circle' style={shake} ></animated.div> */ }
{/* <animated.div className='circle' style={follow} ></animated.div> */ }

{/* {window.innerWidth > 1250 ? <animated.div className='arrow' style={bounce}><img src={arrow}></img></animated.div> : null} */ }
