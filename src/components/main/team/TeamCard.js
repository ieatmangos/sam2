import React from 'react'
import Fade from 'react-reveal'
import './TeamCard.css'
const TeamCard = () => {
    return (
        <Fade up>
            <div className='teamcard'>
                <div className='teamimage'></div>
                <div className='teamtext'><h1>Sam</h1><h3>Owner</h3><p>Loremkjgj ipsum dolor sit amet.</p></div>
            </div>
        </Fade>
    )
}

export default TeamCard
