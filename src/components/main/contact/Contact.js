import React, { Component } from 'react'
import './Contact.css'

import Banner from '../banner/Banner'
import ContactForm from './ContactForm'
export class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper'>
                <Banner message={'Lets Talk'} color={'white'} />
                <p style={{ color: 'white', paddingLeft: '5%', width: '80%', paddingBottom: '5%', fontSize: '1em' }}>Let's do great things together! Talk to use about your project, business or ask us a question about and we’ll get back to you within 24 hours</p>
                <ContactForm />

            </div>
        )
    }
}

export default Contact
