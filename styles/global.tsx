import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    div {
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;

        &-track {
          background: GhostWhite, 0.25;
          box-shadow: inset 0 0 6px rgba(black, 0.15);
        }

        &-thumb {
          background-color: DarkGray;
          border-radius: 25px;
          border: 3px solid transparent;
        }
      }
    }
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
  .fieldset {
    background-color: transparent !important;
  }

  .collapse {
    &-group {
      padding: 0 !important;
    }
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
