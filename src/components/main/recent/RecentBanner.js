import React from 'react'
import './RecentBanner.css'

import Fade from 'react-reveal'

const RecentBanner = () => {

    return (
        <div className='recentbanner' id='work' >
            <div className='recentbanner-h1'>Our Recent Work<Fade right><div className='recentbannercircle'></div></Fade></div>
        </div>
    )
}

export default RecentBanner