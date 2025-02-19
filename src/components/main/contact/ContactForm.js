import React, { Component } from 'react'
import './ContactForm.css'
export class ContactForm extends Component {
    render() {
        return (
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <input type="text" placeholder='name' name="name" required />
                </p>
                <p>
                    <input type="email" placeholder='email' name="email" required />
                </p>
                <p>
                    <input type="text" placeholder='company' name="company" required />
                </p>
                <p>
                    <input type="text" placeholder='phone' name="phone" />
                </p>
                <p>
                    <textarea name="message" placeholder='What you need help with' required></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        )
    }
}

export default ContactForm
