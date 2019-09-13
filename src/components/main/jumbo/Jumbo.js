import React, { useState, useEffect } from 'react'
import './Jumbo.css'
import arrow from '../../../images/arrow.svg'
import { useSpring, animated } from 'react-spring'
import GetItTouch from '../../GetItTouch';



const Jumbo = () => {

    return (
        <div className='jumbo'>
            <div className='jumbo-h1'>
                <h1 style={{}}> <span style={{ color: "#49c5b6", fontWeight: '700' }}>A Boutique Digital Agency</span> focused on driving results and solving business problems. We love doing great work with good people.</h1>
            </div>

            <div style={{
                position: "absolute",
                width: "100%",
                marginTop: window.innerWidth > 800 ? '100px' : '350px',
                // marginBottom: window.innerWidth > 800 ? '0px' : '100px;'
            }}><GetItTouch isFirst={true} /></div>

        </div>
    )
}

export default Jumbo







{/* <animated.div className='circle' style={shake} ></animated.div> */ }
{/* <animated.div className='circle' style={follow} ></animated.div> */ }

{/* {window.innerWidth > 1250 ? <animated.div className='arrow' style={bounce}><img src={arrow}></img></animated.div> : null} */ }
