import React, { Component } from 'react'
import './WhatWeDo.css'

export class WhatWeDo extends Component {
    render() {
        return (
            <div className='whatwedo'>
                {/* <h1>As your partner</h1> */}
                <p id='services' className='whatwedop'>With years of digital marketing & design experience, we’re a team of young savy individuals combining our skills to help solve business problems and accelerate brands and businesses. </p>
                <p>Our specialities include <span className='wwd-span'>Digital Marketing, PPC</span> (Google and Facebook Ad Campaigns),<span className='wwd-span'> E-Commerce, Lead Generation, SEO, Graphic Design,  Branding</span> and<span className='wwd-span'> Email Marketing</span>. We love working with new brands and new people, get in touch to discuss everything from your business, our business and anything in between.</p>
            </div>
        )
    }
}

export default WhatWeDo
