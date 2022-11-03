import React from 'react';
import MyLogo from '../../img/mylogo.png'
import './Navbar.css'

export default function Navbar(props) {
    return (
        <div className='container'>
        <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">Binit KC</a> */}
                <img src={MyLogo} alt="Logo" className="mylogo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link red-underline" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link red-underline" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link red-underline" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link red-underline" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link red-underline" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link red-underline" href="https://blog.binitkc.com.np">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link red-underline" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}