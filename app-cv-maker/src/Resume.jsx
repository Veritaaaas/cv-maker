
function Resume() {
    return (
        <div className="Resume">
            <div className="personal-info">
                <div className="name">John Doe</div>
                <div className="personal-details">
                    <div className="address">Place, PH</div>
                    <div className="phone-number">+63 123 456 7890</div>
                    <div className="email">johndoe@gmail.com</div>
                </div>
            </div>

            <div className="skills">
                <h4>Technical Skills</h4>
                <div className="skill-list">
                    <div className="languages"><span className="skill-label">Languages</span>: Python, SQL, PHP, JavaScript</div>
                    <div className="frameworks"><span className="skill-label">Frameworks</span>: React, Django, Laravel, Node.js</div>
                    <div className="tools"><span className="skill-label">Tools</span>: Git, Docker, Jenkins, AWS</div>
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
                            <li>Dean's List Awardee</li>
                            <li>Best Thesis Award</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;