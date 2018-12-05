import { createGlobalStyle } from 'styled-components'
import 'typeface-merriweather'
import 'typeface-ibm-plex-mono'
import 'typeface-zilla-slab'
import 'typeface-lora'
import 'typeface-roboto'
import 'typeface-quicksand'
import 'typeface-playfair-display'
import 'typeface-fauna-one'
import 'typeface-raleway'
import 'typeface-lato'
import 'typeface-archivo-narrow'
import 'typeface-oswald'

const GlobalStyle = createGlobalStyle`
  @import './reboot.css';
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
    font-family: 'IBM Plex Mono', monospace, monospace;
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
    font-weight: ${
      window.navigator.userAgent.indexOf('Firefox') === -1 ? 400 : 300
    };
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
    margin: 0 0 1.4736842105em -1.8rem;
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
`

export { GlobalStyle }
