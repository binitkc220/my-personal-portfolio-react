import React from 'react';
import { useState, useEffect } from 'react';
import './Skills.css';
import CircularProgress from './CircularProgress';

//Get current widnows screen dimension
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function Skills() {

    //To get current windows width and height
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const finalSize = windowDimensions.width > 700 ? (windowDimensions.width / 7) : (windowDimensions.width / 4);
    const finalStrokeWidth = windowDimensions.width / 99;
    const finalTextSize = windowDimensions.width > 700 ? (windowDimensions.width / 45) : '';

    return (
        <div className="skills" id="skills">
            <h1 className='text-center'>Skills</h1>
            <div className="container">
                <div className="row">
                    <div className="col skill">
                        <CircularProgress
                            size={finalSize}
                            strokeWidth={finalStrokeWidth}
                            percentage={90}
                            color={'var(--red)'}
                            textSize={finalTextSize}
                        />
                        <span>Programming in C, C++, Python</span>
                    </div>
                    <div className="col skill">
                        <CircularProgress
                            size={finalSize}
                            strokeWidth={finalStrokeWidth}
                            percentage={70}
                            color={'var(--red)'}
                            textSize={finalTextSize}
                        />
                        <span>App/Software Development</span>
                    </div>
                    <div className="col skill">
                        <CircularProgress
                            size={finalSize}
                            strokeWidth={finalStrokeWidth}
                            percentage={90}
                            color={'var(--red)'}
                            textSize={finalTextSize}
                        />
                        <span>Full Stack Web Development</span>
                    </div>
                    <div className="col skill">
                        <CircularProgress
                            size={finalSize}
                            strokeWidth={finalStrokeWidth}
                            percentage={75}
                            color={'var(--red)'}
                            textSize={finalTextSize}
                        />
                        <span>Graphics Designing</span>
                    </div>
                </div>
            </div>
        </div>
    )
}