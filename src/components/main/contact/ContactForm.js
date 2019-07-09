import React, { Component } from 'react'
import './ContactForm.css'
export class ContactForm extends Component {
    render() {
        return (
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <input type="text" placeholder='name' name="name" />
                </p>
                <p>
                    <input type="email" placeholder='email' name="email" />
                </p>
                <p>
                    <textarea name="message" placeholder='message'></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        )
    }
}

export default ContactForm
