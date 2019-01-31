import { createGlobalStyle } from 'styled-components'
import 'typeface-merriweather'
import 'typeface-ibm-plex-mono'
import 'typeface-lora'

import imgBackground from '../assets/bg-stars.png'

const windowGlobal = typeof window !== 'undefined' && window
const isFirefox =
  windowGlobal && window.navigator.userAgent.indexOf('Firefox') !== -1

const GlobalStyle = createGlobalStyle`
  --light-pink: #ec8e9e;
  --pink: #cc6b8e;
  --dark-pink: #904b6b;
  --purple: #50435d;
  --dark-purple: #223043;
  --sun: #ffbea3;
  --background: #05141a;
  --dark-cloud: #080880;
  --light-cloud: #3848c8;

  @import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i,900,900i');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
  a:hover {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
    border-bottom: 1px solid #ffffff;
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
    background-color: #05141a;
    background-color: #000020;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Merriweather', 'Georgia', 'serif';
    font-size: 1.8rem;
    line-height: 1.75;
    color: #c2c2c2;
    font-weight: ${isFirefox ? 300 : 400};
    /*background: url(${imgBackground});*/
  }
  h1,h2,h3,h4,h5,h6 {
    /* color: rgb(96, 102, 102); */
    color: #ffffff;
    font-family: 'Press Start 2P', 'Lora', 'Georgia', 'serif';
    font-weight: 600;
    font-size: 5rem;
    line-height: 1.5;
    margin-top: 2.4rem;
    margin-bottom: 1.2rem;

    font-weight: normal;

    a {
      color: #ffffff;
      padding: 0 0.5rem;
      margin: 0 -0.5rem;
    }
    a:hover {
      color: rgb(255,255,255);
      text-decoration: none;
      background-color: #3848c8;
      border: 8px solid #281098;
      margin-left: -13px;
      padding: 5px 5px 3px;
    }
  }
  article > h1 {
    font-size: 4rem;
  }
  article h2, article h3, article h4, article h5, article h6 {
    margin-top: 6rem;
  }
  h3 ~ p {
    font-family: 'Rubik', -system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", 'Merriweather', 'Georgia', 'serif';
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h4 {
    font-size: 1.3rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  h6 {
    font-size: 1.1rem;
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
