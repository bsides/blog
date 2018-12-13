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
        <img src={profilePic} alt={`Rafael "BSIDES" Pereira`} />
        <p>
          Escrito por{' '}
          <a href="https://twitter.com/bsides">
            <strong>Rafael "BSIDES" Pereira</strong>
          </a>
          , apaixonado por games e desenvolvedor web frontend há um tempão!
        </p>
      </BioWrapper>
    )
  }
}

export default Bio
