import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html.sr .load-hidden {
        visibility: hidden;
    }
    [data-simplebar]:not(.simplebar-dragging) .simplebar-content-wrapper {
	    scroll-behavior: smooth;
    }
    :root {
      --black: #000;
      --textWhite: #ffffff;
      --textBold: 700;
      --textSuperBold: 800;
      --textGray: #949494;
      --lightRed: #E50019;
      --darkRed: #CB0D1F;
      
    }
    
    html, body, #root {
        min-height: 100vh;
        width : 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    section {
        position: relative;
    }
    h1, h2, h3, h4, h5 {
        color: var(--textWhite);
    }
     span, button, p  {
        font-family: 'Open Sans', sans-serif;
        color: var(--textGray);
    }
    b, strong {
        color: var(--textWhite);
    }
    textarea {
        resize: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        color: var(--textWhite);
        transition: all 5000s ease-in-out 0s;
    }
    textarea, select, input, textarea, select:focus, button{
        border: 0;
        outline: none;
    }
    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }
    *, button, input {
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
    }
    ul {
        color: var(--black);
    }

    @media (max-width: 1440px) {
        html {
            font-size: 85%;
        }
    }
    @media (max-width: 1024px) {
        html {
            font-size: 80%;
        }
    }
    @media (max-width: 768px) {
        html {
            font-size: 75%;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 65%;
        }
    }
`