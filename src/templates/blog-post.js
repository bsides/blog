import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/Layout'

const DateStyled = styled.p`
  margin-bottom: 1rem;
  margin-top: -1rem;
`
const Ruler = styled.hr`
  margin-bottom: 4rem;
`
const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
`
const monthNames = () => {
  return Array.from({ length: 12 }, (x, index) =>
    new Date(0, index).toLocaleDateString('pt-BR', { month: 'short' })
  )
}
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1)
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const theDate = new Date(post.frontmatter.date)
    const ptDate = `${theDate.getDay()} / ${
      monthNames()[theDate.getMonth()]
    } / ${theDate.getFullYear()}`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <article>
          <h1>{post.frontmatter.title}</h1>
          <DateStyled>{ptDate}</DateStyled>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <Ruler />
        <Bio />

        <ListStyled>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ListStyled>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
