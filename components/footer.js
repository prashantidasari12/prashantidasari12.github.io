const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        .footer {
            background-color:#9fcd99;
            display: flex;
            flex-direction: column;
            align-content: stretch;
            justify-content: space-evenly;
            padding: 10px 0;
            width: 100%;
            max-width: 100%;
            color: #e16969;
        }
        .connect-options {
            display: flex;
            justify-content: space-evenly;
        }
        .connect-options a{
            text-decoration: none;
        }
        a, a > span {
            color:#e16969;
        }

        .hide-on-mobile {
            display: none;
        }
        .copyright {
            text-align: center;
            font-size: 12px;
        }
        i {
            padding:5px;
        }
        @media only screen and (min-width: 768px) {
            .hide-on-mobile {
                display: inline;
            }

            .connect-options {
                width: 80%;
                margin: 0 auto;
            }

            .copyright {
                font-size: 14px;
            }
            
        }
        @media only screen and (min-width: 992px) {

            .connect-options {
                width: 60%;
            }

            .copyright {
                font-size: 16px;
            }
            
        }
    </style>
    <footer class="footer">
        <div class="connect-options">
            <div class="call">
                <a href="tel:619-981-0112">
                <i class="fa fa-phone"></i><span>call</span>
                    <span class="hide-on-mobile">619-981-0112</span>
                </a>
            </div>
            <div class="email">
                <a href="mailto:prashanti.dasari@gmail.com">
                <i class="fa fa-envelope"></i><span>Email</span>
                    <span class="hide-on-mobile">prashanti.dasari@gmail.com</span>
                </a>
            </div>
            <div class="follow">
                <a href="https://www.linkedin.com/in/prashanti-dasari/">
                    <i class="fa fa-linkedin-square"></i>
                    <span>Linkedin</span>
                </a>
            </div>
        </div>
        <div class="copyright">
            <span>&#169;2022 by Prashanti Dasari</span>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);
