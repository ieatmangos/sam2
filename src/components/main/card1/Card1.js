import React, { Component } from 'react'
import './Card1.css'
import Fade from 'react-reveal'
export class Card1 extends Component {
    render() {
        return (
            <div className='card1'>
                <Fade left>
                    <div className='card1-left'>
                        <h1 style={{ fontWeight: '700' }}>Digital Marketing & Strategy</h1>
                        <p style={{ fontWeight: '300' }}>We specialise in creating tailored digital marketing strategies & solutions that grow brand awareness, customer acquisition and growth to drive return on investment for you business. </p>
                        {/* <h3>L</h3> */}
                    </div>
                </Fade>
                <Fade up><div className='card1-right'></div></Fade>
            </div>
        )
    }
}

export default Card1
