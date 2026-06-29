'use client';

import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

interface FormInfo {
  name: string;
  email: string;
  message: string;
}

interface AlertData {
  msg: string;
  type: string;
}

export default function Contact() {
  const [info, setInfo] = useState<FormInfo>({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState<AlertData | null>(null);
  const [sending, setSending] = useState<string>('Send');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const showAlert = (message: string, type: string) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 4000);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setSending('Sending...');
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          setInfo({ name: '', email: '', message: '' });
          showAlert('Message Sent Successfully !', 'success');
          setSending('Send');
        },
        () => {
          showAlert('Some Internal Error Occurred ! Feel free to send Email.', 'danger');
          setSending('Send');
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 d-flex align-items-center justify-content-center">
            <img src="/img/contact-img.svg" className="contact-image" alt="" />
          </div>
          <div className="col-sm-6">
            <h1 className="contact-title">Get In Touch</h1>
            <form className="my-3" ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  id="name"
                  name="name"
                  onChange={onChange}
                  value={info.name}
                  required
                />
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    onChange={onChange}
                    value={info.email}
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  onChange={onChange}
                  id="message"
                  name="message"
                  style={{ height: '150px' }}
                  value={info.message}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn btn-light contact-button ${sending === 'Sending...' ? 'disabled' : ''}`}
              >
                <i className="fa-solid fa-paper-plane"></i>
                {sending}
              </button>
              <Alert alert={alert} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
