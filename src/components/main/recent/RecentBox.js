import React from 'react'
import './RecentBox.css'
import Fade from 'react-reveal'

const RecentBox = (props) => {

    return (
        <Fade>
            <div className='recentbox'>
                <div className={props.props.textclass}><h1>{props.props.company}</h1><h3>{props.props.work}</h3><p>{props.props.text}</p></div>
                <div className={props.props.imgclass}></div>

            </div>
        </Fade>
    )
}

export default RecentBox
