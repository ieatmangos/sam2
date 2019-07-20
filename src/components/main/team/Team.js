import React, { Component } from 'react'
import TeamBanner from './TeamBanner';
import TeamCard from './TeamCard'
import './Team.css';
export class Team extends Component {
    render() {
        return (
            <div>
                <TeamBanner />
                <div className='teamcardsection'>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />

                </div>
            </div>
        )
    }
}

export default Team
