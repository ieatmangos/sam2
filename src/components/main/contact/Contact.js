import React, { Component } from 'react'
import './Contact.css'

import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'
export class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper'>
                <ContactBanner />
                <ContactForm />

            </div>
        )
    }
}

export default Contact
