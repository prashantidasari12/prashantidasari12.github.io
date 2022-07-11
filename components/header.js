
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        #header {
            width:100%;
            max-width: 100%;
            border: 2px #e16969;
            border-style: solid none;
            background-color:#9fcd99;
            font-family: 'Roboto Mono', monospace;
        }

        .logo {
            text-align: center;
            font-size: 22px;
            font-weight: 700;
            color: #e16969;
        }

        .logo-supporting-text {
            font-size: 14px;
            color: #e16969;
            text-align: center;
            border-bottom: 1px solid black;
        }

        ul {
            display: flex;
            justify-content: space-evenly;
            margin: 0 auto;
            width: 100%;
            padding: 10px 0;
        }

        li {
            display: inline;
        }
        
        li > a {
            color: #e16969;
            text-decoration: none;
        }
        
        li > a:hover {
            color: yellow;
        }

        @media only screen and (min-width: 768px) {
            .logo {
                font-size: 32px;
            }
            .logo-supporting-text {
                font-size: 18px;
            }
            ul {
                width: 80%;
            }
        }

        @media only screen and (min-width: 992px) {
            .logo {
                font-size: 62px;
            }
            .logo-supporting-text {
                font-size: 36px;
            }
            ul {
                width: 60%;
            }
        }
        
    </style>
    <section id="website-header">
        <div id="header">
            <div class="logo">Prashanti Dasari</div>
            <div class="logo-supporting-text">Front End Developer</div>
            <ul class="nav-list">
                <li><a href="#" onclick="loadMainContent('home-component')">HOME</a></li>
                <li><a href="#" onclick="loadMainContent('resume-component')">RESUME</a></li>
                <li><a href="#" onclick="loadMainContent('aboutme-component')">ABOUT ME</a></li>
                <li><a href="#" onclick="loadMainContent('contact-component')">CONTACT</a></li>
            </ul>
        </div>
    </section>
    `;

class Header extends HTMLElement {
    constructor() {
        super();
        console.log('this is :', this);
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}
customElements.define('header-component', Header);

loadMainContent('home-component');


function loadMainContent(pageName) {
    const components = ['home-component', 'resume-component', 'aboutme-component', 'contact-component'];
    const index = components.indexOf(pageName);
    if (index !== -1) {
        components.splice(index, 1);
    }
    document.getElementById(pageName).style.display = 'block';
    components.forEach(function(page) {
        document.getElementById(page).style.display = 'none';
    })
}
