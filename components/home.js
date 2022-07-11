const homeTemplate =  document.createElement('template');
homeTemplate.innerHTML = `
    <style>
        img {
            width: 445px;
            border-radius: 52%;
            height: 301px;
            filter: grayscale(100%);
        }
        .home-main-body {
            padding: 25px;
            display: flex;
            flex-direction: column;
            align-content: center;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            height: 100%;
            background-color: #f5a96e;
        }
        h1 {
            font-family: 'Roboto Mono', monospace;
            font-weight: 600;
            font-size: 32px;
            margin: 0;
            text-align: center;
        }
        .aim {
            width: 100%;
            text-align: center;
            line-height: 28px;
            font-family: 'Roboto Mono', monospace;
        }

        @media only screen and (min-width: 768px) {
           h1 {
               font-size: 42px;
           }
           .aim {
               width: 60%;
           }
        }

        @media only screen and (min-width: 992px) {
            h1 {
                font-size: 48px;
            }
            .aim {
                width: 50%;
            }
        }
    </style>
    
    <div class="home-main-body">
        <h1>Hi, Welcome to my e-Portfolio!</h1>
        <div class="profile-pic">
            <img alt="profile-pic" src="./images/DSC_0100.jpeg">
        </div>
        <p class="aim">
            My aim is to create scalable web applications with easy user interface by combining technology and design
        </p>
    </div>
`

class Home extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(homeTemplate.content);
    }
}

var homeComponent = customElements.define('home-component', Home);

// function displayHomeComponent() {
//     console.log('from home js');
//     customElements.define('home-component', Home);
// }
