import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Header from './Header'

import { GlobalStyle } from '../assets/globalStyles'
import { theme } from '../utils/theme'

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
const SubHeadingStyled = styled.h3`
  margin-top: 0;
  margin-bottom: -1rem;
  a {
    background: rgb(153, 0, 0);
    color: white;
    &:hover {
      border: none;
    }
  }
`
const GeneralWrapper = styled.div`
  max-width: 740px;
  padding: 1.5rem 1.75rem;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 50px rgb(0, 0, 0);
  margin: 0 auto;
`
const Grid = styled.div`
  margin-top: 275px;
  position: relative;
  z-index: 10;
  /* display: grid;
  grid-template-columns: 1fr 1fr 10px 740px 10px 1fr 1fr; */
  // margin-top: -6rem;
  margin-bottom: 6rem;
  /* > * {
    grid-column: 4;
  } */
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
  @media only screen and (max-width: 768px) {
    display: block;
    max-width: 100%;
  }
`
function onScroll() {
  var logo = document.querySelector('header a')
  if (window.scrollY > 100) {
    logo.style.display = 'none'
  } else {
    logo.style.display = 'block'
  }
}
class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', onScroll)
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', onScroll)
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeadingStyled>
          <Link to={'/'}>{title}</Link>
        </HeadingStyled>
      )
    } else {
      header = (
        <SubHeadingStyled>
          <Link to={'/'}>{title}</Link>
        </SubHeadingStyled>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Header />
          <Grid>
            <GeneralWrapper>{children}</GeneralWrapper>
          </Grid>
          <Footer />
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default Layout
