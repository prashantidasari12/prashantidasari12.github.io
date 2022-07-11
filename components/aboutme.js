const aboutMeTemplate =  document.createElement('template');
aboutMeTemplate.innerHTML = `
    <style>
      .aboutme-container {
        padding: 0 50px;
        background: #f5a96e;
        font-family: 'Roboto Mono', monospace;
     }
     .aboutme-layout {
         display:flex;
         flex-direction: column;
         align-content: flex-start;
         align-items: center;
         justify-content: space-around;
         margin: 0 auto;
         padding: 10px;
     }
      h1 {
        margin: 0;
        padding: 10px 0;
        text-align: center;
        font-weight: 600;
      }
      table, tr, td {
        border-collapse: collapse;
        border: 1px solid black;
      }
      .summary-goals {
          border-bottom: 1px solid black;
      }
      .skills-abilities {
          border-bottom: 1px solid black;
      }
    </style>
    <div class="aboutme-container">
        <h1>About Me</h1>
        <div class="aboutme-layout">
          <div class="summary-goals">
             <h4>Career Summary and Goals</h4>
             <p>I aim to excel in every aspect of web development and provide value to the client. 
             I will thrive to keep myself updated with emerging technology bringing more insights and ways to 
             make applications visually attractive and user friendly interface with its utmost objectives. 
             I will continue to learn skills to always keep improving the scalibilty and modularity of code writing process.
             </p>
          </div>
          <div class="skills-abilities">
           <h4>Skill Set And Abilities</h4>
          <table>
          <tr>
            <td>Web Development Technologies</td>
            <td>HTML5, CSS3, Sass, JavaScriptEcmaScript5), JQuery(3.2.1), Angular 12, , Highchart JS, Kendo library, RESTful Web Services, AJAX, JSON, Gulp, GraphQl queries, Chrome Developer Tools</td>
          </tr>
          <tr>
            <td>Frameworks</td>
            <td>Angular 12, NodeJS, Underscore JS, Moment JS,Bootstrap3</td>
          </tr>
          <tr>
            <td>Testing frameworks</td>
            <td>Jasmine, Karma-jasmine, Jest</td>
          </tr>
          <tr>
            <td>Database</td>
            <td>MySQL, Postgres Sql database</td>
          </tr>
          <tr>
            <td>Tools</td>
            <td>Git, SVN, Postman, Sublime, Visual Studio, Balsamiq, Adobe Photoshop, MockPlus, UML, Microsoft Office Suite</td>
          </tr>
          <tr>
            <td>Web servers</td>
            <td>Apache Tomcat, NodeJS, WAMP, XAMP</td>
          </tr>
          <tr>
            <td>Operating Systems</td>
            <td>Windows, Linux, Mac</td>
          </tr>
          <tr>
            <td>Development Process</td>
            <td>Agile (Scrum) Methodology, Waterfall</td>
          </tr>
          <tr>
            <td>Others</td>
            <td>github, BitBucket</td>
          </tr>
        </table>
          </div>
        </div>
    </div>
`
class AboutMe extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(aboutMeTemplate.content);
    }
}

var aboutmeComponent = customElements.define('aboutme-component', AboutMe);

// function displayResumeComponent() {
//     console.log('from home js');
//     customElements.define('resume-component', Resume);
// }