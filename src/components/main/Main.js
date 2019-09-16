import React, { Component } from 'react'
import './Main.css'

import Jumbo from './jumbo/Jumbo'
import Banner from './banner/Banner'
import WhatWeDo from './whatwedo/WhatWeDo'
import Card1 from './card1/Card1'
import Card2 from './card2/Card2'
import Card3 from './card3/Card3'
import Card4 from './card4/Card4'
import Card5 from './card5/Card5'
import Clients from './clients/Clients'
import Recent from './recent/Recent'
import Team from './team/Team'
import Contact from './contact/Contact'
import Opinions from './opinions/Opinions'
import Fade from 'react-reveal'

export class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Jumbo />
                <Banner id={"ani"} message={'What We Do'} />
                {/* <Fade up> */}
                <WhatWeDo />
                {/* </Fade> */}
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
                <Recent />
                <Clients />
                <Team />
                <Fade><Contact /></Fade>
                {/* <Opinions /> */}
            </div>
        )
    }
}

export default Main
