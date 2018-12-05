import React from 'react'
import styled from 'styled-components'

// Import typefaces

import profilePic from '../assets/profile.jpg'

const BioWrapper = styled.div`
  display: flex;
  margin-bottom: 5rem;
  p {
    margin: 0;
  }
  img {
    margin-right: 1rem;
    margin-bottom: 0;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
`

class Bio extends React.Component {
  render() {
    return (
      <BioWrapper>
        <img src={profilePic} alt={`Kyle Mathews`} />
        <p>
          Escrito por <strong>Rafael "BSIDES" Pereira</strong>, morador de São
          Paulo e desenvolvedor web há um tempão!{' '}
          <a href="https://twitter.com/bsides">Segue ele no Twitter!</a>
        </p>
      </BioWrapper>
    )
  }
}

export default Bio
