import React from 'react';
import PropTypes from 'prop-types';
import './resume.css';

function Resume( 
    {
        fullName = "John Doe", 
        email = "johndoe@gmail.com", 
        phoneNumber = "0123456789", 
        address = "Place, PH",

        languages,
        frameworks,
        tools
    }) {
    return (
        <div className="Resume">
            <div className="personal-info">
                <div className="name">{fullName}</div>
                <div className="personal-details">
                    <div className="address">{address}</div>
                    <div className="phone-number">{phoneNumber}</div>
                    <div className="email">{email}</div>
                </div>
            </div>

            <div className="skills">
                <h4>Technical Skills</h4>
                <div className="skill-list">
                    <div className="languages"><span className="skill-label">Languages</span>: 
                        <ul>
                            {languages.map((language, index) => <li key={index}>{language},</li>)}
                        </ul>
                    </div>
                    <div className="frameworks"><span className="skill-label">Frameworks</span>: 
                        <ul>
                            {frameworks.map((framework, index) => <li key={index}>{framework},</li>)}
                        </ul>
                    </div>
                    <div className="tools"><span className="skill-label">Tools</span>:
                        <ul>
                            {tools.map((tool, index) => <li key={index}>{tool},</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="experience">
                <h4>Work Experience</h4>
                <div className="job-list">
                    <div className="job">
                        <div className="primary-info">
                            <div className="job-title">Software Engineer</div>
                            <div className="company">Company A</div>
                            <div className="date">Jan 2020 - Present</div>
                        </div>
                        <div className="job-description">
                            <ul>
                                <li>Developed and maintained web applications using Django and React</li>
                                <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                            </ul>
                        </div>
                    </div>
                    <div className="job">
                        <div className="primary-info">
                            <div className="job-title">Software Engineer</div>
                            <div className="company">Company A</div>
                            <div className="date">Jan 2020 - Present</div>
                        </div>
                        <div className="job-description">
                            <ul>
                                <li>Developed and maintained web applications using Django and React</li>
                                <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects">
                <h4>Projects</h4>
                <div className="project-list">
                    <div className="project">
                        <div className="project-title">Project A</div>
                        <div className="project-description">
                            <ul>
                                <li>Developed a web application using Django and React</li>
                                <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-title">Project B</div>
                        <div className="project-description">
                            <ul>
                                <li>Developed a web application using Django and React</li>
                                <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-title">Project C</div>
                        <div className="project-description">
                            <ul>
                                <li>Developed a web application using Django and React</li>
                                <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="education">
                <h4>Education</h4>
                <div className="school-list">
                    <div className="school">
                        <div className="school-name">University of ABC</div>
                        <div className="location">Place City, PH</div>
                        <div className="degree">Bachelor of Science in Computer Science</div>
                        <div className="date">2016 - 2020</div>
                    </div>
                    <div className="awards">
                        <ul>
                            <li>Dean List Awardee</li>
                            <li>Best Thesis Award</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

Resume.propTypes = {
    fullName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string,
  };
  
  

export default Resume;