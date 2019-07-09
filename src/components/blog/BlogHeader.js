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
                    <a href='/'><h3>Home</h3></a>

                </div>


            </div>
        )
    }
}

export default BlogHeader
