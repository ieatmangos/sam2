import React, { Component } from 'react'
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='head-left'> <h1>header</h1></div>

                <div className='head-right'>
                    <a href='#work'><h3>Work</h3></a>
                    <a href='#team'><h3>Team</h3></a>
                    <a href='#blog'><h3>Blog</h3></a>
                    <a href='#contact'> <h3>Contact</h3></a>
                </div>


            </div>
        )
    }
}

export default Header
