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
        color: #ffffff;
    }
     span, button, p  {
        font-family: 'Open Sans', sans-serif;
        color: #949494;
    }
    b, strong {
        color: #ffffff;
    }
    textarea {
        resize: none;
    }
    input, textarea {
        &:focus-within {
            border: 2px solid #838383;
        }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        color: #fff;
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
        color: #000;
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