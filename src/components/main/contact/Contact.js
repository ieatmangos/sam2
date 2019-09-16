import React, { Component } from 'react'
import './Contact.css'

import Banner from '../banner/Banner'
import ContactForm from './ContactForm'
export class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper' id='contact'>
                <div style={{ marginLeft: window.innerWidth > 800 ? "25%" : "10%" }}><Banner message={'Lets Talk'} color={'white'} /></div>
                <p style={{ color: 'white', marginLeft: window.innerWidth > 800 ? '25%' : '10%', width: window.innerWidth > 800 ? '50%' : '80%', paddingBottom: '0%', fontSize: '1em', marginTop: '-20px' }}>Let's do great things together! Talk to us about your project, business or ask us a question about anything and we’ll get back to you within 24 hours.</p>
                <ContactForm />

            </div>
        )
    }
}

export default Contact
