import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import OpinionsBanner from './OpinionsBanner'
import OpinionsCard from './OpinionsCard'

import './Opinions.css'

const blog1 = {
    link: '/blog/1',
    title: 'Blog 1',
    text: 'This article is about some stuff'
}
const blog2 = {
    link: '/blog/2',
    title: 'Blog 2',
    text: 'This article is about some stuff'
}
const blog3 = {
    link: '/blog/3',
    title: 'Blog 3',
    text: 'This article is about some stuff'
}

export class Opinions extends Component {


    render() {
        return (
            <div>
                <OpinionsBanner />
                <div className='opinionscardsection'>
                    <OpinionsCard props={blog1} />
                    <OpinionsCard props={blog2} />
                    <OpinionsCard props={blog3} />
                </div>




            </div>
        )
    }
}

export default Opinions
