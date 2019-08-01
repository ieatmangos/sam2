import React, { Component } from 'react'
import './Contact.css'

import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'
export class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper'>
                <ContactBanner />
                <p style={{ color: 'white', paddingLeft: '5%', width: '90%', paddingBottom: '5%', fontSize: '2vw' }}>Let's do great things together! Talk to use about your project, business or ask us a question about and we’ll get back to you within 24 hours</p>
                <ContactForm />

            </div>
        )
    }
}

export default Contact
