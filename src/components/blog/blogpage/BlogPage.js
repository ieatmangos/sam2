import React, { Component, Fragment } from 'react'
import './BlogPage.css'


export class BlogPage extends Component {
    render() {
        return (
            <Fragment>
                <div className='blogpagewrapper'>
                    <div className={this.props.info.image}></div>
                    <h1>{this.props.info.title}</h1>
                    <h3>{this.props.info.about}</h3>
                    <p>{this.props.info.text}</p>
                </div>
                <div className='articles'>
                    <div className='articlebox'>{this.props.info.article1} <button><a href={this.props.info.article1Link}>Read</a></button></div>
                    <div className='articlebox'>{this.props.info.article2} <button><a href={this.props.info.article2Link}>Read</a></button></div>
                    <div className='articlebox'>{this.props.info.article3} <button><a href={this.props.info.article3Link}>Read</a></button></div>
                </div>
            </Fragment>
        )
    }
}

export default BlogPage
