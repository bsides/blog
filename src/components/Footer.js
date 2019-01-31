import React from 'react'
import styled from 'styled-components'

import backgroundFooter from '../assets/bg-buildings.png'

const FooterWrapper = styled.footer`
  background: url(${backgroundFooter});
  min-height: 839px;
  min-height: 450px;
  position: relative;
  z-index: 2;
`

class Footer extends React.Component {
  render() {
    return <FooterWrapper />
  }
}

export default Footer
