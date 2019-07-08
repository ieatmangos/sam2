import React, { Component } from 'react'
import './Main.css'

import Jumbo from './jumbo/Jumbo'
import Banner from './banner/Banner'
import WhatWeDo from './whatwedo/WhatWeDo'
import Card1 from './card1/Card1'
import Card2 from './card2/Card2'
import Clients from './clients/Clients'
import Recent from './recent/Recent'
import Team from './team/Team'
import Contact from './contact/Contact'
import Opinions from './opinions/Opinions'


export class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Jumbo />
                <Banner />
                <WhatWeDo />
                <Card1 />
                <Card2 />
                <Recent />
                <Clients />
                <Team />
                <Contact />
                <Opinions />
            </div>
        )
    }
}

export default Main
