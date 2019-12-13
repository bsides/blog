import { createGlobalStyle } from 'styled-components'
import 'typeface-merriweather'
import 'typeface-press-start-2p'
// import 'typeface-ibm-plex-mono'
// import 'typeface-lora'

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
  --super-yellow: #ff0;
  --link-cyan: #00e0ff;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a {
    color: #00e0ff;
    text-decoration: none;
  }
  a:hover {
    color: #ff0;
    text-decoration: none;
    background-color: transparent;
    border-bottom: 1px solid #ff0;
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
  html, body {
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
  h1, h2, h3, h4, h5, h6 {
    /* color: rgb(96, 102, 102); */
    color: #d89020;
    font-family: 'Press Start 2P', 'Lora', 'Georgia', 'serif';
    font-weight: 600;
    font-size: 5rem;
    line-height: 1.5;
    margin-top: 2.4rem;
    margin-bottom: 1.2rem;

    font-weight: normal;

    a {
      color: #f8d800;
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
  .post h1 {
    font-size: 3rem;
  }
  .post h2, .post h3, .post h4, .post h5, .post h6 {
    margin-top: 6rem;
  }
  /* h3 ~ p {
    font-family: 'Rubik', -system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", 'Merriweather', 'Georgia', 'serif';
  } */
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  .post h3 { font-size: 1.5rem; }
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
    color: #fff;
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


  /**
  * Darcula theme
  *
  * Adapted from a theme based on:
  * IntelliJ Darcula Theme (https://github.com/bulenkov/Darcula)
  *
  * @author Alexandre Paradis <service.paradis@gmail.com>
  * @version 1.0
  */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #a9b7c6;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
      color: inherit;
      background: rgba(33,66,131,.85);
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
      color: inherit;
      background: rgba(33,66,131,.85);
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2b2b2b;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: #808080;
  }

  .token.delimiter,
  .token.boolean,
  .token.keyword,
  .token.selector,
  .token.important,
  .token.atrule {
    color: #cc7832;
  }

  .token.operator,
  .token.punctuation,
  .token.attr-name {
      color: #a9b7c6;
  }

  .token.tag,
  .token.tag .punctuation,
  .token.doctype,
  .token.builtin {
      color: #e8bf6a;
  }

  .token.entity,
  .token.number,
  .token.symbol {
      color: #6897bb;
  }

  .token.property,
  .token.constant,
  .token.variable {
      color: #9876aa;
  }

  .token.string,
  .token.char {
    color: #6a8759;
  }

  .token.attr-value,
  .token.attr-value .punctuation {
      color: #a5c261;
  }
  .token.attr-value .punctuation:first-child {
      color: #a9b7c6;
  }

  .token.url {
    color: #287bde;
    text-decoration: underline;
  }

  .token.function {
    color: #ffc66d;
  }

  .token.regex {
      background: #364135;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.inserted {
      background: #294436;
  }

  .token.deleted {
      background: #484a4a;
  }

  /*code.language-css .token.punctuation {
    color: #cc7832;
  }*/

  code.language-css .token.property,
  code.language-css .token.property + .token.punctuation {
    color: #a9b7c6;
  }

  code.language-css .token.id {
    color: #ffc66d;
  }

  code.language-css .token.selector > .token.class,
  code.language-css .token.selector > .token.attribute,
  code.language-css .token.selector > .token.pseudo-class,
  code.language-css .token.selector > .token.pseudo-element {
    color: #ffc66d;
  }
`

export { GlobalStyle }
