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
                        <h1>Digital</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, placeat.</p>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </Fade>

            </div>
        )
    }
}

export default Card2
