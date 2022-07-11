const contactTemplate =  document.createElement('template');
contactTemplate.innerHTML = `
 <style>
 .contact-container {
    padding: 0 50px;
    background: #f5a96e;
    height: 500px;
    font-family: 'Roboto Mono', monospace;
 }
  h1 {
    margin: 0;
    padding: 10px 0;
    text-align: center;
    font-weight: 600;
  }
  .contact-details {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    flex-direction: column;
  }

  h4 {
      text-align:center;
  }

  span {
      font-weight:400;
  }

 </style>
 <div class="contact-container">
  <h1>Contact</h1>
  <div class="contact-details">
    <h4>I WOULD LOVE TO
    HEAR FROM YOU</h4>
    <div class="contact-info">
     <h4>Mobile:<span>619-981-0112</span></h4>
     <h4>Email:<span>prashanti.dasari@gmail.com</span></h4>
    </div>
  </div>
 
 </div>
`

class Contact extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(contactTemplate.content);
    }
}

var aboutmeComponent = customElements.define('contact-component', Contact);
