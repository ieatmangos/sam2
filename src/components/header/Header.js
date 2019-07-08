import React, { Component } from 'react'
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='head-left'> <h1>header</h1></div>

                <div className='head-right'>
                    <h3>Work</h3>
                    <h3>Team</h3>
                    <h3>Clients</h3>
                    <h3>Contact</h3>
                </div>


            </div>
        )
    }
}

export default Header
