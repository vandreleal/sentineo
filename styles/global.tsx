import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    font-family: 'Space Mono', monospace !important;
  }

  body {
    background-image: radial-gradient(#333 1px, transparent 0),
      radial-gradient(#222 1px, transparent 0);
    background-position: 0 0, 25px 25px;
    background-attachment: fixed;
    background-size: 50px 50px;
    text-transform: uppercase;
  }

  main {
    padding: 1rem 0 !important;
  }

  .btn {
    text-transform: uppercase !important;
  }

  .card,
  .fieldset,
  .collapse-group {
    padding: 0 !important;
    backdrop-filter: blur(25px);
    background-color: hsl(0 0% 50% / 10%) !important;
  }

  .dot {
    .label {
      text-transform: uppercase !important;
    }
  }

  dt {
    height: auto !important;
    white-space: normal !important;
  }

  table {
    min-width: 700px;
  }

  @media print {
    header,
    footer {
      display: none;
    }
  }
`

export default GlobalStyle
