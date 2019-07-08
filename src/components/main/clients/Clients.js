import React, { Component } from 'react'
import './Clients.css'
import ClientsBanner from './ClientsBanner'
import ClientsBox from './ClientsBox'



export class Clients extends Component {
    render() {
        return (
            <div>
                <ClientsBanner />
                <ClientsBox />

            </div>
        )
    }
}

export default Clients
