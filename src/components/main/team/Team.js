import React, { Component } from 'react'
import Banner from '../banner/Banner'
import TeamCard from './TeamCard'
import './Team.css';
import Fade from 'react-reveal'
export class Team extends Component {
    render() {
        return (
            <div id='team'>
                <Banner message={'Team'} />
                <Fade up >
                    <div className='teamcardsection'>
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />

                    </div>
                </Fade>
            </div>
        )
    }
}

export default Team
