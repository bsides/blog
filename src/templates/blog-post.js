import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'

import { formatDateToLocale } from '../utils/helper'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Separator from '../components/styled/Separator'

const MetaInfo = styled.div`
  padding-bottom: 3rem;

  p {
    display: inline;
    margin: 0;
    padding-right: 1.5rem;
  }
  svg {
    margin-right: 1rem;
  }
`
const DateStyled = styled.p`
  margin-bottom: 1rem;
  margin-top: -1rem;
`
const Ruler = styled.hr`
  margin-top: 2rem;
  margin-bottom: 4rem;
`
const ListStyled = styled.ul`
  display: ${props => (props.hide ? 'none' : 'flex')};
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
`
const Article = styled.article`
  /* display: grid;
  grid-template-columns: 1fr 1fr 10px 740px 10px 1fr 1fr; */

  & > * {
    /* grid-column: 4; */
  }
`
const ReadingTime = styled.p``

const FullPostMarkup = ({ title, theDate, readTime, hideMeta, children }) => (
  <Fragment>
    <h1>{title}</h1>
    {hideMeta && (
      <MetaInfo>
        <DateStyled>
          <FontAwesomeIcon icon={faCalendarAlt} title="Data do artigo" />
          {theDate}
        </DateStyled>
        <ReadingTime>
          <FontAwesomeIcon icon={faClock} title="Tempo de leitura" />
          {readTime}
          <Separator>min</Separator> de leitura
        </ReadingTime>
      </MetaInfo>
    )}
    {children}
  </Fragment>
)

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next, slug } = this.props.pageContext

    const ptDate = formatDateToLocale(new Date(post.frontmatter.date))

    const ttr = post.timeToRead
    const createFullPostMarkup = () => ({ __html: post.html })
    const isSingle = post.frontmatter.templateKey === 'page'

    return (
      <Layout location={this.props.location} title={siteTitle} className="post">
        <Helmet
          htmlAttributes={{ lang: 'pt-BR' }}
          meta={[
            { name: 'description', content: siteDescription },
            {
              name: 'google-site-verification',
              content: 'lKU0mSyB09mFh-C2-hGD-yUM-xPHCUkoaPEUOjVapPk',
            },
          ]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <SEO postPath={slug} postNode={post} postSEO />
        {/* <article>
          <h1>{post.frontmatter.title}</h1>
          <DateStyled>{ptDate}</DateStyled>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article> */}
        <FullPostMarkup
          title={post.frontmatter.title}
          theDate={ptDate}
          readTime={ttr}
          hideMeta={!isSingle}
        >
          <Article dangerouslySetInnerHTML={createFullPostMarkup()} />
        </FullPostMarkup>
        <Ruler />
        <Bio />

        <ListStyled hide={isSingle}>
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
        date(formatString: "MMMM DD, YYYY")
        templateKey
      }
      fields {
        slug
        readingTime {
          minutes
        }
      }
      timeToRead
    }
  }
`
