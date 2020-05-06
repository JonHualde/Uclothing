import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 10px 20px;

        @media screen and (max-width: 800px) {
            padding: 5px;
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