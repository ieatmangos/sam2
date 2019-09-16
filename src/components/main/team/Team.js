import React, { Component } from 'react'
import Banner from '../banner/Banner'
import TeamCard from './TeamCard'
import './Team.css';
import Fade from 'react-reveal'
import sam from '../../../images/new images/sam.jpg'
import annabelle from '../../../images/new images/Annabelle.jpeg'

export class Team extends Component {
    render() {
        return (
            <div id='team'>
                <Banner message={'Team'} />
                <Fade>
                    <div className='teamcardsection'>
                        <TeamCard image={sam} name={"Sam"} title={"Marketing Director"} />
                        <TeamCard image={annabelle} name={"Annabelle"} title={"Creative Director"} />
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Team
