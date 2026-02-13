import React from 'react';
import './Contact.css';

const Contact = ({ email, loading }) => {
    if (loading) {
        return (
            <section id="contact" className="contact">
                <div className="contact-container">
                    <div className="loading">Loading contact...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-description">
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
                {email && (
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noopener noreferrer" className="contact-email">
                        {email}
                    </a>
                )}
            </div>
        </section>
    );
};

export default Contact;
