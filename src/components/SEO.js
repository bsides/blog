import React from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import config from '../../data/SiteConfig'

class SEO extends React.Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    const postMeta = postSEO ? postNode.frontmatter : null
    let title = postSEO ? postMeta.title : config.siteTitle
    let description = postSEO
      ? postMeta.description || postNode.exerpt
      : config.siteDescription
    let image = postSEO ? postMeta.cover : config.siteLogo
    let postURL = postSEO
      ? urljoin(
          config.siteUrl,
          config.pathPrefix === '/' ? '' : config.pathPrefix,
          postPath
        )
      : null
    const blogURL = urljoin(
      config.siteUrl,
      config.pathPrefix === '/' ? '' : config.pathPrefix
    )
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ]
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        }
      )
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ''}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <title>{title}</title>
      </Helmet>
    )
  }
}

export default SEO
