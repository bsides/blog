import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReadme } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { formatDateToLocale } from '../utils/helper'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ReadMore from '../components/styled/ReadMore'

library.add(faReadme, faArrowRight)

const H3Styled = styled.h3`
  margin-bottom: 0;
  text-shadow: 2px 3px 0px #555555;
`
const DateStyled = styled.small`
  margin-bottom: 1rem;
  display: block;
  font-size: 1.2rem;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'pt-BR' }}
          meta={[
            { name: 'description', content: siteDescription },
            {
              name: 'google-site-verification',
              content: 'lKU0mSyB09mFh-C2-hGD-yUM-xPHCUkoaPEUOjVapPk',
            },
          ]}
        />
        <SEO />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <H3Styled>
                <Link to={node.fields.slug}>{title}</Link>
              </H3Styled>
              <DateStyled>
                {formatDateToLocale(new Date(node.frontmatter.date))}
              </DateStyled>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <ReadMore to={node.fields.slug}>
                <span className="read-more-content">Leia mais</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </ReadMore>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
