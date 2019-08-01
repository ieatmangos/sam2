import React, { Component } from 'react'
import './Card4.css'
import Fade from 'react-reveal'
export class Card4 extends Component {
    render() {
        return (
            <div className='card4'>
                <Fade up>
                    <div className='card4-left'></div></Fade><Fade right>
                    <div className='card4-right'>
                        <h1>Design & Branding</h1>
                        <p>
                            We specialise in thoughtful, conceptual graphic design, branding and content to change human behaviours and drive business results. Working with clients from a diverse range of industries, we've helped businesses of all sizes to define their message and present themselves in a clear and effective way to their audience.

</p>
                        {/* <h3>Platforms we specialise in - Google Adwords, Facebook, Instagram, LinkedIn, Youtube, Pinterest,
</h3> */}
                    </div>
                </Fade>

            </div>
        )
    }
}

export default Card4
