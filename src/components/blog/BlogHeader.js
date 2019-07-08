import React, { Component } from 'react'
import './BlogHeader.css'
export class BlogHeader extends Component {
    render() {
        return (
            <div className='blogheader'>
                <a href='/'>
                    <div className='bloghead-left'><h1>header</h1></div>
                </a>

                <div className='bloghead-right'>
                    <h3>Work</h3>
                    <h3>Team</h3>
                    <h3>Clients</h3>
                    <h3>Contact</h3>
                </div>


            </div>
        )
    }
}

export default BlogHeader
