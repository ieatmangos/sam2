

import React, { useEffect } from 'react'
import { TweenMax, Power4 } from 'gsap'
import './Banner.css'

import Fade from 'react-reveal'

const Banner = (props) => {

    useEffect(() => {
        TweenMax.fromTo("#ani", 2, { opacity: 0 }, { delay: 5, opacity: 1, ease: Power4.easeOut })
    })
    return (
        <div className='banner'>
            <div id={props.id ? props.id : "none"} style={{ color: props.color || 'black' }} className='banner-h1'>{props.message}
                <Fade right><div className='bannercircle'></div></Fade></div>
        </div>
    )
}

export default Banner