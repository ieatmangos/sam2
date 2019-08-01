import React, { Component } from 'react'
import TeamBanner from './TeamBanner';
import TeamCard from './TeamCard'
import './Team.css';
import Fade from 'react-reveal'
export class Team extends Component {
    render() {
        return (
            <div>
                <TeamBanner />
                <Fade up>
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
