import React from 'react';
import './Portfolio.css';

export default function PortfolioCard({ title, description, imgUrl, live, sourcecode }) {
    return (
        <div className="col-sm-5 col-md-4">
            <div className="image-overlay">
                <img src={imgUrl} alt="" className="img-fluid card-image" />
                <div className="overlay">
                    <div className='text'>
                        <h4>{title}</h4>
                        <h6>{description}</h6>
                    </div>
                    <div className="d-flex flex-row justify-content-center down">
                        <a type="button" className={`btn btn-light m-2 ${live === 'null' ? 'invisible' : ''}`} href={live} target="_blank" rel="noreferrer">View Live</a>
                        <a type="button" className={`btn btn-light m-2 ${sourcecode === 'null' ? 'invisible' : ''}`} href={sourcecode} target="_blank" rel="noreferrer">Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
