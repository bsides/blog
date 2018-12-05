import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { GlobalStyle } from '../assets/globalStyles'

const HeadingStyled = styled.h1`
  margin-top: 0;
  a {
    background: rgb(153, 0, 0);
    color: white;
    &:hover {
      border: none;
    }
  }
`
const LinkStyled = styled(Link)`
  text-decoration: 'none';
  color: 'inherit';
`
const SubHeadingStyled = styled.h3`
  margin-top: 0;
  margin-bottom: -1rem;
`
const GeneralWrapper = styled.div`
  margin-left: 'auto';
  margin-right: 'auto';
  max-width: 1200px;
  padding: 1.5rem 0.75rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 10px 740px 10px 1fr 1fr;
  > * {
    grid-column: 4;
  }
  figure {
    grid-column: 2 / -2;
    margin: 20px 0;
  }
  blockquote {
    grid-column: 3 / 5;
    padding-left: 20px;
    border-left: 3px solid black;
  }
  @media only screen and (max-device-width: 480px) {
    display: block;
    max-width: 100%;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeadingStyled>
          <LinkStyled to={'/'}>{title}</LinkStyled>
        </HeadingStyled>
      )
    } else {
      header = (
        <SubHeadingStyled>
          <LinkStyled to={'/'}>{title}</LinkStyled>
        </SubHeadingStyled>
      )
    }
    return (
      <Grid>
        <GlobalStyle />
        <GeneralWrapper>
          {header}
          {children}
        </GeneralWrapper>
      </Grid>
    )
  }
}

export default Layout
