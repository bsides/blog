import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ReadMore = styled(Link)`
  /* border: 1px solid ${props => props.theme.primary}; */
  /* border-radius: 4px; */
  border: 1px solid rgb(40,16,152);
  color: #00e0ff;
  display: inline-block;
  overflow: hidden;
  padding: 1.2rem 6rem 1.2rem 0.1rem;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  line-height: 1;
  font-size: 1.2rem;
  font-family: 'Press Start 2P', 'Lora', 'Georgia', 'serif';
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
    border-left: 1px solid rgb(40, 16, 152);
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
      top: 48%;
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
    background-color: #00e0ff;
    /* background-color: rgb(232, 72, 208); */
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
      opacity: .5;
    }
  }
`

export default ReadMore
