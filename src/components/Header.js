import React from 'react'
import styled from 'styled-components'

import backgroundHeader from '../assets/bg-clouds3a.png'
import imgLogo from '../assets/logo.png'

const HeaderWrapper = styled.header`
  background: url(${backgroundHeader}) -257px 0;
  min-height: 275px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: left;
  align-items: center;
  position: fixed;
  top: 0;

  img {
    width: auto;
    height: auto;
  }
  h1 {
    text-shadow:
        /* first layer at 1px */ -1px -1px 0px #50435d,
      0px -1px 0px #50435d, 1px -1px 0px #50435d, -1px 0px 0px #50435d,
      1px 0px 0px #50435d, -1px 1px 0px #50435d, 0px 1px 0px #50435d,
      1px 1px 0px #50435d, /* second layer at 2px */ -2px -2px 0px #50435d,
      -1px -2px 0px #50435d, 0px -2px 0px #50435d, 1px -2px 0px #50435d,
      2px -2px 0px #50435d, 2px -1px 0px #50435d, 2px 0px 0px #50435d,
      2px 1px 0px #50435d, 2px 2px 0px #50435d, 1px 2px 0px #50435d,
      0px 2px 0px #50435d, -1px 2px 0px #50435d, -2px 2px 0px #50435d,
      -2px 1px 0px #50435d, -2px 0px 0px #50435d, -2px -1px 0px #50435d;
    color: #ffff00;
    font-weight: normal;
    display: none;
    visibility: hidden;
  }
  div {
    position: relative;
    @media (min-width: 740px) {
      width: 740px;
    }
    a {
      border: 0;
      text-decoration: none;
    }
    a.quem {
      position: absolute;
      left: 320px;
      top: 37px;
      background: #080458;
      color: rgb(0, 216, 216);
      padding: 5px 10px;
      cursor: pointer;
      transform: rotateZ(-18deg);
      font-family: 'Press Start 2P', Lora, Georgia, serif;
      text-transform: uppercase;
      display: block;
      font-size: 1.6rem;

      &:hover {
        background: #b09000;
        color: rgb(8, 4, 88);
      }
    }
  }
`

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <div>
          <a href="/">
            <h1>Blog do Rafa</h1>
            <img src={imgLogo} />
          </a>
          <a className="quem" href="/sobre">
            Quem?
          </a>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header
