

import React from 'react'
import Fade from 'react-reveal'
import './OpinionsCard.css'
const OpinionsCard = (props) => {
    return (
        <div className='opinionscard'>
            < a href={props.props.link}>
                <div className='opinionscard-image'></div>
            </a>
            <div className='opinionscard-text'><h1>{props.props.title}</h1><p>{props.props.text}</p></div>
        </div>
    )
}

export default OpinionsCard

