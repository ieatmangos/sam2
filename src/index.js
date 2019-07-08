import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Blog from './components/blog/Blog'
import BlogPage from './components/blog/blogpage/BlogPage'
import { ParallaxProvider } from 'react-scroll-parallax';

const blog1 = {
    image: 'blogpageimg1',
    title: 'Title',
    about: 'This article is about some stuff',
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, optio nulla, consequatur, saepe debitis voluptatem mollitia praesentium voluptas totam nihil quidem illum. Architecto tempore officia ipsa facilis reprehenderit dolor quam.",
    article1: 'article2',
    article2: 'article3',
    article3: 'article4',
    article1Link: '/blog/2',
    article2Link: '/blog/3',
    article3Link: '/blog/4',
}
const blog2 = {
    image: 'blogpageimg1',
    title: 'Title Two',
    about: 'This article is about some stuff',
    text: "Lorem ipsum dolor, sit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisicing elit. Distinctio, optio nulla, consequatur, saepe debitis voluptatem mollitia praesentium voluptas totam nihil quidem illum. Architecto tempore officia ipsa facilis reprehenderit dolor quam.",
    article1: 'article3',
    article2: 'article4',
    article3: 'article1',
    article1Link: '/blog/3',
    article2Link: '/blog/4',
    article3Link: '/blog/5',
}
const blog3 = {
    image: 'blogpageimg1',
    title: 'Title THREE',
    about: 'This article is about some stuff',
    text: "Lorem ipsum dolor, sit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisicing elit. Distinctio, optio nulla, consequatur, saepe debitis voluptatem mollitia praesentium voluptas totam nihil quidem illum. Architecto tempore officia ipsa facilis reprehenderit dolor quam.",
    article1: 'article4',
    article2: 'article1',
    article3: 'article2',
    article1Link: '/blog/4',
    article2Link: '/blog/1',
    article3Link: '/blog/2',
}
const blog4 = {
    image: 'blogpageimg1',
    title: 'Title FOUR',
    about: 'This article is about some stuff',
    text: "Lorem ipsum dolor, sit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisiciit amet consectetur adipisicing elit. Distinctio, optio nulla, consequatur, saepe debitis voluptatem mollitia praesentium voluptas totam nihil quidem illum. Architecto tempore officia ipsa facilis reprehenderit dolor quam.",
    article1: 'article1',
    article2: 'article2',
    article3: 'article3',
    article1Link: '/blog/1',
    article2Link: '/blog/2',
    article3Link: '/blog/3',
}


const routing = (
    <ParallaxProvider>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/blog/1" render={() => <Blog info={blog1} />} />
                <Route path="/blog/2" render={() => <Blog info={blog2} />} />
                <Route path="/blog/3" render={() => <Blog info={blog3} />} />
                <Route path="/blog/4" render={() => <Blog info={blog4} />} />




            </div>
        </Router>
    </ParallaxProvider>
)
ReactDOM.render(routing, document.getElementById('root'));

