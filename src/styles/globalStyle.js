import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }


    html, body, #root {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        height: 100%;
    }


    body {
        font-family: 'Nunito', Arial, Helvetica, sans-serif;
        font-size: .9rem;
        background-color: #f2f9ff;
    }


`

export default GlobalStyle;