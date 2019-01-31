import React from 'react'
import styled from 'styled-components'

import backgroundHeader from '../assets/bg-clouds3.png'
import imgLogo from '../assets/logo.png'

const HeaderWrapper = styled.header`
  background: url(${backgroundHeader}) -257px 0;
  min-height: 275px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  position: relative;
  z-index: 2;

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
    width: 740px;
  }
`

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <div>
          <h1>Blog do Rafa</h1>
          <img src={imgLogo} />
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header
