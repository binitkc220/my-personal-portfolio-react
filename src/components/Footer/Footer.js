import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="row d-flex justify-content-between mt-2">
                    <div className="col-sm text-center-custom m-2">
                        <i className="fas fa-map-marker-alt text-warning"></i>
                        <h5>Address</h5>
                        <p className='custom-text-muted'>Kohalpur-11, Banke, Nepal</p>
                    </div>
                    <div className="col-sm text-center-custom m-2">
                        <i className="fas fa-phone text-warning"></i>
                        <h5>Call Me</h5>
                        <p className='custom-text-muted'> +977 (98********)</p>
                    </div>
                    <div className="col-sm text-center-custom m-2">
                        <i className="fas fa-envelope text-warning"></i>
                        <h5>Enquiries</h5>
                        <p className='custom-text-muted'>binitkc220@gmail.com</p>
                    </div>
                </div>
                <div className="footer-right d-flex flex-column justify-content-center align-items-center">
                    <div className='footer-social-icons'>
                        <a href="https://www.facebook.com/binit.kc.500/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/binit-kc-2bb363163/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://github.com/binitkc220" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    </div>
                    <div className="footer-text">
                        <p className='custom-text-muted'>Designed and Maintained using React Js by Binit KC<br />
                            Copyright 2022. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
