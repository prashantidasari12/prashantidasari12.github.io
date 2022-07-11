const projectTemplate = document.createElement('template');
projectTemplate.innerHTML = `
    <p>This is projects page </p>
`

class Projects extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(projectTemplate.content);
    }
}

var projectsComponent = customElements.define('projects-component', Projects);
