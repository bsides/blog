import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ReadMore = styled(Link)`
  /* border: 1px solid ${props => props.theme.primary}; */
  /* border-radius: 4px; */
  border: 1px solid ${props => props.theme.primaryLight};
  color: ${props => props.theme.primary};
  display: inline-block;
  overflow: hidden;
  padding: 1.2rem 6rem 1.2rem 0.1rem;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  line-height: 1;
  font-size: 1.3rem;
  .read-more-content {
    font-size: 1em;
    line-height: 1.2;
    padding: 0 16px;
    position: relative;
    right: 0;
    transition: right 300ms ease;
    display: block;
    text-align: left;
  }
  .icon {
    border-left: 1px solid ${props => props.theme.primaryLight};
    position: absolute;
    right: 0;
    text-align: center;
    top: 50%;
    transition: all 300ms ease;
    transform: translateY(-50%);
    width: 58px;
    height: 70%;
    svg {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${props => props.theme.primary};
    opacity: 0;
    transition: opacity 300ms ease;
  }
  &:hover {
    border: 1px solid transparent;
    .read-more-content {
      right: 100%;
    }
    .icon {
      border-left: 0;
      font-size: 1.8em;
      width: 100%;
    }
    &:after {
      opacity: .2;
    }
  }
`

export default ReadMore
