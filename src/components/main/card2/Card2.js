import React, { Component } from 'react'
import './Card2.css'
import Fade from 'react-reveal'
export class Card2 extends Component {
    render() {
        return (
            <div className='card2'>
                <Fade up>
                    <div className='card2-left'></div></Fade><Fade right>
                    <div className='card2-right'>
                        <h1 style={{ fontWeight: '700' }}>Google & Facebook Ads</h1>
                        <p style={{ fontWeight: '300' }}>Amplify your message to the right people at the right time with the power of paid digital advertising. We help brands accelerate website growth and conversions, generate and capture leads and customer remarketing strategy to reach the right people to return positive results.
</p>
                        <h3 style={{ fontWeight: '700' }}>Platforms we specialise in - Google Adwords, Facebook, Instagram, LinkedIn, Youtube, Pinterest,
</h3>
                    </div>
                </Fade>

            </div>
        )
    }
}

export default Card2
