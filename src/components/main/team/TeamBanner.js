import React from 'react'
import './TeamBanner.css'

import Fade from 'react-reveal'

const TeamBanner = () => {

    return (
        <div className='teambanner' id='team' >
            <div className='teambanner-h1'>Team<Fade right><div className='teambannercircle'></div></Fade></div>
        </div>
    )
}

export default TeamBanner