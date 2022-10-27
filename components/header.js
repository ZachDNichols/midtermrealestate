const header = document.createElement('template');

header.innerHTML = `
    <head>
        <style>
            .desktop {
                width: 90%;
                margin: 0 auto;
            }
            
            header {
                margin: 0;
                background-color: blueviolet;
                color: white;
                position: sticky;
            }
            
            header::after {
                content: '';
                display: table;
                position: sticky;
                clear: both;
            }
            
            .logo {
                float: left;
                padding: 10px 0;
            }
            
            .logo a {
                color: white;
                text-decoration: none;
            }
            
            nav.desktopNav ul{
                margin: 0;
                padding: 0;
                list-style: none;
                float: right;
            }
            
            nav.desktopNav li {
                display: inline-block;
                margin-left: 70px;
                margin-top: 40px;
                position: relative;
            }
            
            nav.desktopNav a {
                color: white;
                text-decoration: none;
                font-size: larger;
            }
            
            nav.desktopNav a::before {
                content: '';
                display: block;
                height: 3px;
                background-color: wheat;
            
                position: absolute;
                top: 20px;
                width: 0%;
            
                transition: all ease-in-out 250ms;
            }
            
            nav.desktopNav a:hover {
                color: wheat
            }
            
            nav.desktopNav a:hover::before {
                width: 100%;
            }
        </style>
    </head>
        <header >
            <div class = "desktop">
                <h1 class = "logo"><a href = "index.html">Little Country Real Estate</a></h1>
                <nav class = "desktopNav">
                    <ul>
                        <li><a href="buy.html">Buy</a></li>
                        <li><a href="rent.html">Rent</a></li>
                        <li><a href="sell.html">Sell</a></li>
                        <li><a href="agents.html">Agents</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `;

class Header extends HTMLElement 
{
    constructor() 
    {
        super();
    }

    connectedCallback() 
    {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(header.content);
    }
}

customElements.define('header-component', Header);