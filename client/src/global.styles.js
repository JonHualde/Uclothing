import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100vh;
    }
    
    body {
        font-family: 'Open Sans Condensed';
        padding: 0px 0px;
        background: #ececeb;
        min-height: 100%;
 
        @media screen and (max-width: 800px) {
            padding: 0px;
        }
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        color: rgb(8, 8, 160);
        transition: .3s ease-in;
    }
`;