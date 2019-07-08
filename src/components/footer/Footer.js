import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
            <div className='footer'>

                <div className='footer-right'>
                    <h1> Company </h1>
                    <i class="fa fa-facebook-f"></i>
                    <i class="fa fa-instagram"></i>
                    <i class="fa fa-twitter"></i>

                </div>
                <div className='mango'><p>Website by Eat Mangos</p></div>
            </div>
        )
    }
}

export default Footer
