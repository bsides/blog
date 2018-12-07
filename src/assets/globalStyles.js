import { createGlobalStyle } from 'styled-components'
import 'typeface-merriweather'
import 'typeface-ibm-plex-mono'
import 'typeface-lora'

const windowGlobal = typeof window !== 'undefined' && window
const isFirefox =
  windowGlobal && window.navigator.userAgent.indexOf('Firefox') !== -1

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a {
    color: rgb(153, 0, 0);
    text-decoration: none;

  }
  a:hover {
    color: rgb(153, 0, 0);
    text-decoration: none;
    background-color: transparent;
    border-bottom: 1px solid rgb(153, 0, 0);
  }
  pre,
  code,
  kbd,
  samp {
    font-family: 'IBM Plex Mono', Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
    'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
    'Courier New', Courier, monospace !important;
    font-size: 1em;
  }
  html,body {
    font-size: 10px;
  }
  body {
    font-family: 'Merriweather', 'Georgia', 'serif';
    font-size: 1.8rem;
    line-height: 1.75;
    color: hsla(0, 0%, 0%, 0.9);
    font-weight: ${isFirefox ? 300 : 400};
  }
  h1,h2,h3,h4,h5,h6 {
    /* color: rgb(96, 102, 102); */
    color: hsla(0, 0%, 0%, 0.9);
    font-family: 'Lora', 'Georgia', 'serif';
    font-weight: 600;
    font-size: 4rem;
    line-height: 1.5;
    margin-top: 2.4rem;
    margin-bottom: 1.2rem;

    a {
      padding: 0 0.5rem;
      margin: 0 -0.5rem;
    }
    a:hover {
      color: rgb(255, 255, 255);
      text-decoration: none;
      background-color: rgb(153, 0, 0);
    }
  }
  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 2.3rem;
  }
  h5 {
    font-size: 2rem;
  }
  h6 {
    font-size: 1.8rem;
  }
  p {
    margin: 0 0 1.75rem;
  }
  blockquote {
    font-style: italic;
    color: #686868;
    margin: 0 0 1.4736842105em;
  }
  /* blockquote {
    margin-left: -1.5rem;
    border: 0 solid #1a1a1a;
    border-left-width: 4px;
    font-size: 1.9rem;
    font-size: 1.1875rem;
    font-style: italic;
    line-height: 1.4736842105;
    margin: 0 0 1.4736842105em;
    overflow: hidden;
    padding: 0 0 0 1.263157895em;
  } */
  a.gatsby-resp-image-link:hover {
    text-decoration: none;
    border: 0;
  }
  .gatsby-resp-image-wrapper {
    max-width: 740px;
  }
`

export { GlobalStyle }
