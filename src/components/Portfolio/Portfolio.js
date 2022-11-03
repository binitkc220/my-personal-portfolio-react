import React from 'react';
import './Portfolio.css'
import PortfolioCard from './PortfolioCard';
import Static from '../../img/projectimg/static.jpg';
import Bccer from '../../img/projectimg/bccer.png';
import CityWebpage from '../../img/projectimg/citywebpage.jpg';
import Design from '../../img/projectimg/design.jpg';
import Doraemon from '../../img/projectimg/doraemonbinit.jpg';
import Django from '../../img/projectimg/django.png';
import iNotebook from '../../img/projectimg/inotebook.png';
import TextUtils from '../../img/projectimg/textutils.png';
import SMS from '../../img/projectimg/sms.png';
import BVMLogo from '../../img/projectimg/bvmlogo.jpg';
import Anticorruption from '../../img/projectimg/anticorruption.jpg';
import BVMWebpage from '../../img/projectimg/bvm.png';

export default function Portfolio() {

    const projects = [
        {
            title: 'TextUtils',
            description: 'Webapp developed using React',
            imgUrl: TextUtils,
            live: 'https://binitkc.com.np/textutils',
            sourcecode: 'https://github.com/binitkc220/TextUtils-React',
            type: 'Web App'
        },
        {
            title: 'Student Management System - C++',
            description: 'Login based student management system',
            imgUrl: SMS,
            live: 'https://www.youtube.com/watch?v=WFRJIhbqB2s&t=47s&ab_channel=EasyExplanation',
            sourcecode: 'https://github.com/binitkc220/Student-Management-System-in-C',
            type: 'Software'
        },
        {
            title: 'Employee Management System - Django',
            description: 'Login based web app with data entry system',
            imgUrl: Django,
            live: 'https://binitkc220.pythonanywhere.com',
            sourcecode: 'https://github.com/binitkc220/Employee-Management-System-Django',
            type: 'Web App'
        },
        {
            title: 'Anti-Corruption Nepal',
            description: 'App developed using Flutter for creating awareness on corruption',
            imgUrl: Anticorruption,
            live: 'null',
            sourcecode: 'https://github.com/binitkc220/Anti-Corruption_App-Flutter',
            type: 'Software'
        },
        {
            title: 'iNotebook, a cloud Notebook',
            description: 'MERN stack web app',
            imgUrl: iNotebook,
            live: 'https://binitkc.com.np/inotebook',
            sourcecode: 'https://github.com/binitkc220/iNotebook-MERN-Stack',
            type: 'Web App'
        },
        {
            title: 'BCCER Form Software',
            description: 'GUI based software creating using Python',
            imgUrl: Bccer,
            live: 'null',
            sourcecode: 'null',
            type: 'Software'
        },
        {
            title: 'Creativity',
            description: 'My first creative design with 3D Paint',
            imgUrl: Design,
            live: 'null',
            sourcecode: 'null',
            type: 'Graphics'
        },
        {
            title: 'City Computer Education',
            description: 'My first designed website',
            imgUrl: CityWebpage,
            live: 'https://citycomputer.edu.np',
            sourcecode: 'null',
            type: 'Web App'
        },
        {
            title: 'Bal Vidhya Secondary School',
            description: 'Designed website for my school',
            imgUrl: BVMWebpage,
            live: 'https://bvmss.edu.np',
            sourcecode: 'null',
            type: 'Web App'
        },
        {
            title: 'Creating Static Contact Form',
            description: 'View Details (Youtube)',
            imgUrl: Static,
            live: 'https://www.youtube.com/watch?v=6hh8oxru2No&t=3s&ab_channel=BinitKc',
            sourcecode: 'null',
            type: 'Others'
        },
        {
            title: 'Creativity',
            description: 'Doraemon using CorelDraw',
            imgUrl: Doraemon,
            live: 'null',
            sourcecode: 'null',
            type: 'Graphics'
        },
        {
            title: 'Logo',
            description: 'BVM School logo designed using CorelDraw',
            imgUrl: BVMLogo,
            live: 'null',
            sourcecode: 'null',
            type: 'Graphics'
        }
    ];

    return (
        <section id="portfolio">
            <div className="container">
                <h1 className='text-center'>Portfolio</h1>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
                        <button className="nav-link" id="nav-software-tab" data-bs-toggle="tab" data-bs-target="#nav-software" type="button" role="tab" aria-controls="nav-software" aria-selected="false">Software</button>
                        <button className="nav-link" id="nav-web-app-tab" data-bs-toggle="tab" data-bs-target="#nav-web-app" type="button" role="tab" aria-controls="nav-web-app" aria-selected="false">Web App</button>
                        <button className="nav-link" id="nav-graphics-tab" data-bs-toggle="tab" data-bs-target="#nav-graphics" type="button" role="tab" aria-controls="nav-graphics" aria-selected="false">Graphics</button>
                        <button className="nav-link" id="nav-others-tab" data-bs-toggle="tab" data-bs-target="#nav-others" type="button" role="tab" aria-controls="nav-others" aria-selected="false">Others</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">

                    <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                        <div className="row mt-3">
                            {
                                projects.map((project, index) => {
                                    return (
                                        <PortfolioCard
                                            key={project.index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="tab-pane fade show" id="nav-software" role="tabpanel" aria-labelledby="nav-software-tab">
                        <div className="row mt-3">
                            {
                                projects.map((project, index) => {
                                    if (projects[index].type === 'Software') {
                                        return (
                                            <PortfolioCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    }
                                    return (<></>);
                                })
                            }
                        </div>
                    </div>

                    <div className="tab-pane fade show" id="nav-web-app" role="tabpanel" aria-labelledby="nav-web-app-tab">
                        <div className="row mt-3">
                            {
                                projects.map((project, index) => {
                                    if (projects[index].type === 'Web App') {
                                        return (
                                            <PortfolioCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    }
                                    return (<></>);
                                })
                            }
                        </div>
                    </div>

                    <div className="tab-pane fade show" id="nav-graphics" role="tabpanel" aria-labelledby="nav-graphics-tab">
                        <div className="row mt-3">
                            {
                                projects.map((project, index) => {
                                    if (projects[index].type === 'Graphics') {
                                        return (
                                            <PortfolioCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    }
                                    return (<></>);
                                })
                            }
                        </div>
                    </div>

                    <div className="tab-pane fade show" id="nav-others" role="tabpanel" aria-labelledby="nav-others-tab">
                        <div className="row mt-3">
                            {
                                projects.map((project, index) => {
                                    if (projects[index].type === 'Others') {
                                        return (
                                            <PortfolioCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    }
                                    return (<></>);
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
