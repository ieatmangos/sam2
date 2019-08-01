import React, { Component } from 'react'
import './Card5.css'
import Fade from 'react-reveal'
export class Card5 extends Component {
    render() {
        return (
            <div className='card5'>
                <Fade left>
                    <div className='card5-left'>
                        <h1>Email Marketing</h1>
                        <p>An email database is the most valuable marketing tool for your business. Harnessing your email database with carefully curated marketing strategy, design and implementation should be at the foundation of any digital marketing strategy. Combining our expertise in design, data and marketing we help clients formulate long lasting email marketing strategies and campaigns that drive results.</p>
                        {/* <h3>L</h3> */}
                    </div>
                </Fade>
                <Fade up><div className='card5-right'></div></Fade>
            </div>
        )
    }
}

export default Card5
