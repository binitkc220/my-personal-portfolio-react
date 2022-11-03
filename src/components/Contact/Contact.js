import React, { useRef, useState } from 'react';
import './Contact.css';
import contactimg from '../../img/contact-img.svg';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

export default function Contact() {
    const [info, setInfo] = useState({ name: "", email: "", message: "" });
    const onChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    //Show Alert after sending message for 4 second
    const [alert, setAlert] = useState(null);
    const [sending, setSending] = useState("Send");
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 4000);
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setSending("Sending...");
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setInfo({ name: "", email: "", message: "" });
                showAlert("Message Sent Successfully !", "success");
                setSending("Send");
            }, (error) => {
                console.log(error.text);
                showAlert("Some Internal Error Occurred ! Feel free to send Email.", "danger");
                setSending("Send");
            });
    };

    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 d-flex align-items-center justify-content-center">
                        <img src={contactimg} className="contact-image" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h1 className="contact-title">Get In Touch</h1>
                        <form className="my-3" ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Full Name" id="name" name="name" onChange={onChange} value={info.name} required />
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email Address" id="email" name="email" onChange={onChange} value={info.email} aria-describedby="emailHelp" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" placeholder="Message" onChange={onChange} id="message" name="message" style={{ height: "150px" }} value={info.message} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-light contact-button"><i className="fa-solid fa-paper-plane"></i>{sending}</button>
                            <Alert alert={alert} />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
