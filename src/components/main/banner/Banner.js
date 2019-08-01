

import React from 'react'
import './Banner.css'

import Fade from 'react-reveal'

const Banner = (props) => {
    return (
        <div className='banner'>
            <div style={{ color: props.color || 'black' }} className='banner-h1'>{props.message}
                <Fade right><div className='bannercircle'></div></Fade></div>
        </div>
    )
}

export default Banner