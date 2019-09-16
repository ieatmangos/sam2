import React from 'react'

import './TeamCard.css'
const TeamCard = (props) => {
    return (

        <div className='teamcard'>
            <div className='teamimage' style={{ backgroundImage: `url(${props.image})`, backgroundPosition: "50% 50%", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
            </div>
            <div className='teamtext'><h1>{props.name}</h1><h3>{props.title}</h3></div>

        </div>

    )
}

export default TeamCard
