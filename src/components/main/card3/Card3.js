import React, { Component } from 'react'
import './Card3.css'
import Fade from 'react-reveal'
export class Card3 extends Component {
    render() {
        return (
            <div className='card3'>
                <Fade left>
                    <div className='card3-left'>
                        <h1>SEO</h1>
                        <p>We break down the myths to tell you exactly how to improve your Google rankings and help you get on the first page of Google. With Boutique Digital, you'll know exactly why your search results are improving and what actions we took to achieve this.  </p>
                        {/* <h3>L</h3> */}
                    </div>
                </Fade>
                <Fade up><div className='card3-right'></div></Fade>
            </div>
        )
    }
}

export default Card3
