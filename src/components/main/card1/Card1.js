import React, { Component } from 'react'
import './Card1.css'
import Fade from 'react-reveal'
export class Card1 extends Component {
    render() {
        return (
            <div className='card1'>
                <Fade left>
                    <div className='card1-left'>
                        <h1>Social</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, placeat.</p>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </Fade>
                <Fade up><div className='card1-right'></div></Fade>
            </div>
        )
    }
}

export default Card1
