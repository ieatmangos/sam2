import React, { Component } from 'react'
import './Clients.css'
import Banner from '../banner/Banner'
import ClientsBox from './ClientsBox'



export class Clients extends Component {
    render() {
        return (
            <div>
                <Banner message={'Our Clients'} />
                <ClientsBox />

            </div>
        )
    }
}

export default Clients
