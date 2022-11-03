import React from 'react'
import './Services.css';
import ServicesCard from '../ServicesCard/ServicesCard';

export default function Services() {
    return (
        <section id="services">
            <div className="container">
                <h1 className='text-center'>Services</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ServicesCard
                                icon={'fa-solid fa-terminal'}
                                heading={'Programming'}
                                description={'C, C++, Python and Javascript Programming'}
                            />
                        </div>
                        <div className="carousel-item">
                            <ServicesCard
                                icon={'fa-solid fa-paintbrush'}
                                heading={'Design'}
                                description={'Graphics Designing using CorelDRAW, Adobe Photoshop and other photo eiditing tools'}
                            />
                        </div>
                        <div className="carousel-item">
                            <ServicesCard
                                // emoji={HumbleEmoji}
                                icon={'fa-solid fa-laptop-code'}
                                heading={'Development'}
                                description={'Software Development using Python and C++, Android/IOS App Development using Flutter, Web App Developemnt using HTML, CSS, JS, React, Django'}
                            />
                        </div>
                        <div className="carousel-item">
                            <ServicesCard
                                icon={'fa-solid fa-print'}
                                heading={'Tech Support'}
                                description={'As i love to say myself a Tech Expert, I can solve your all kinds of Tech/Web Solutions'}
                            />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </section>
    )
}
