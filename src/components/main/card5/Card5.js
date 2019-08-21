import React, { Component } from 'react'
import './Card5.css'
import Fade from 'react-reveal'
export class Card5 extends Component {
    render() {
        return (
            <div className='card5'>
                <Fade >
                    <div className='card5-left'>
                        <h1 style={{ fontWeight: '700' }}>Email Marketing</h1>
                        <p style={{ fontWeight: '300' }}>An email database is the most valuable marketing tool for your business. Combining our expertise in design, data and marketing we help clients formulate long lasting email marketing strategies and campaigns that drive results.
</p>
                        {/* <h3>L</h3> */}
                    </div>
                </Fade>
                <Fade up><div className='card5-right'></div></Fade>
            </div>
        )
    }
}

export default Card5
