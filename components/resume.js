const resumeTemplate =  document.createElement('template');
resumeTemplate.innerHTML = `
    <style>
        .resume-container {
            padding: 0 50px;
            background: #f5a96e;
            font-family: 'Roboto Mono', monospace;
        }
        .resume-layout {
            display: flex;
        }
        .experiene-content {
            width: 75%;
        }
        .skill-content {
            width: 25%;
            padding: 25px;
        }
        .traingle-bullet {
            width: 0;
            height: 0;
            border-top: 25px solid transparent;
            border-bottom: 25px solid transparent;
            align-self: center;
        }
        .work {
            display: flex;
            border-bottom: 1px solid black;
        }
        .work:last-of-type {
            border-bottom: none;
        }
        .expertise-bullet {
            border-left: 50px solid #DC143C;
        }
        .summary-bullet {
            border-left: 50px solid #2E8B57;
        }
        .experience-bullet {
            border-left: 50px solid #800080;
        }
        h1 {
            margin: 0;
            padding: 10px 0;
            text-align: center;
            font-weight: 600;
        }
        .sub-item-experiene {
            list-style-type: circle;
        }
    </style>
    <div class="resume-container">
        <h1>Resume</h1>
        <div class="resume-layout">
            <div class="experiene-content">
                <div class="expertise work">
                    <div class="traingle-bullet expertise-bullet">
                    </div>
                    <div class="work-description">
                        <h4>Principle Expertise</h4>
                        <ul>
                            <li>Application development primarily using HTML5, CSS3, JavaScript, JQuery, Angular8/9 and various other JavaScript libraries.</li>
                            <li>Experienced in developing responsive UI using CSS3 media queries and other libraries such as Bootstrap</li>
                            <li>Automating the application development process using Node and NPM.</li>
                            <li>Building prototypes using Adobe Photoshop and Balsamiq mockups.</li>
                            <li>Maintaining code base in github.</li> 
                        </ul>
                            
                    </div>
                </div>
                <div class="summary work">
                    <div class="traingle-bullet summary-bullet">
                    </div>
                    <div class="work-description">
                        <h4>Professional Summary</h4>
                        <ul>
                            <li>About 5.5 years of experience in software development.</p>
                            <li>Extensive knowledge in development of single page web applications using modern frameworks HTML5, CSS3, JavaScript, jQuery, AngularJS, NodeJS.</li>
                            <li>Experience in building Responsive Web Application UI using CSS3 media queries and responsive frameworks such as Bootstrap and Materialize CSS.</li>
                            <li>Good understanding of CSS preprocessor such as SASS.</li>
                            <li>Skilled in developing web applications using Web Content Accessibility Guidelines (WCAG) 2.0 for providing web content to wide range people with disabilities.</li>
                            <li>Strong Debugging and testing skills to ensure quality of applications developed.</li>
                            <li>Experienced in finding leaks and bugs in application using unit testing like Jasmine, Jest framework.</li>
                            <li>Experienced in following the MVC design patterns for developing the applications.</li>
                            <li>Good understanding of Software Development lifecycle such as Requirement gathering, designing, development, testing, implementation and deployment along with Agile Methodologies.</li>
                            <li>Well versed with advantages of minification, scaffolding and automating the project using frameworks such as Bower, Gulp and Web server.</li>
                        </ul>
                        
                    </div>
                </div>
                <div class="experience work">
                    <div class="traingle-bullet experience-bullet"></div>
                    <div class="work-description">
                        <h4>Work Experience</h4>
                        <ul>
                            <li>Chick-fill-A</li>
                            <ul class="sub-item-experiene">
                                <li>Angular Developer</li>
                                <li>Aug 2021-July 2022</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Motive Partners Tegra</li>
                            <ul class="sub-item-experiene">
                                <li>Angular Developer</li>
                                <li>Jan 2021-Aug 2021</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>NextEra Energy</li>
                            <ul class="sub-item-experiene">
                                <li>Full Stack Developer</li>
                                <li>Oct 2020- Dec 2020</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Cigna</li>
                            <ul class="sub-item-experiene">
                                <li>Full Stack Developer</li>
                                <li>Jan 2019- Mar 2020</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Comcast</li>
                            <ul class="sub-item-experiene">
                                <li>I Developer</li>
                                <li>Jan 2018- Jan 2019</li>
                            </ul>
                        </ul>
                    </div>
                </div> 
            </div>
            <div class="skill-content">
                <div class="skills-container">
                    <h5>Skills</h5>
                    <ul>
                        <li>
                            Html
                        </li>
                        <li>
                            CSS3
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            JQuery
                        </li>
                        <li>
                            Angular
                        </li>
                        <li>
                            Highchart Js
                        </li>
                    </ul>
                </div>
                <div class="education-container">
                    <h5>Education</h5>
                    <ul>
                        <li>Master of Information Technology, Wilmington University 2020- present</li>
                        <li>Master of Science Environmental Science, Mumbai University 2009-2011</li>
                        <li>Bachelor of Science Biotechnology, Mumbai University 2006-2009</li>
                    </ul>
                </div>    
            </div>
        </div>
    </div>
`

class Resume extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(resumeTemplate.content);
    }
}

var resumeComponent = customElements.define('resume-component', Resume);

// function displayResumeComponent() {
//     console.log('from home js');
//     customElements.define('resume-component', Resume);
// }