import React, { Component } from 'react'
import BlogHeader from './BlogHeader'
import BlogBanner from './blogbanner/BlogBanner'
import BlogPage from './blogpage/BlogPage'

const blog1 = {
    image: 'blogpageimg1',
    title: 'Title',
    about: 'This article is about some stuff',
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, optio nulla, consequatur, saepe debitis voluptatem mollitia praesentium voluptas totam nihil quidem illum. Architecto tempore officia ipsa facilis reprehenderit dolor quam.",
    article1: 'article1',
    article2: 'article2',
    article3: 'article3',
}

export class Blog extends Component {
    render() {
        return (
            <div>

                <BlogHeader />
                {/* <BlogBanner /> */}
                <div className='blogpage-wrapper'>
                    <BlogPage info={this.props.info} />
                </div>
            </div>
        )
    }
}

export default Blog
