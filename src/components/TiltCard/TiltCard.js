import React from 'react';
import './TiltCard.css';
import Tilt from 'react-tilt';

export default function TiltCard() {
    return (
        <div className="tilt-card">
            <Tilt className="Tilt" options={{ max: 35 }} >
                <div className="Tilt-inner">
                    <div className="tilting-card-body">
                        <span><b>Name :</b> Binit KC</span>
                        <span><b>Date of Birth :</b> Shrawan 7</span>
                        <span><b>Address :</b> Kohalpur-11, Banke(Buspark)</span>
                        <span><b>Email :</b> binitkc220@gmail.com</span>
                        <span><b>Phone :</b> +977 (98********)</span>
                        <span><b>Interest :</b> freelance, full-time</span>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}
