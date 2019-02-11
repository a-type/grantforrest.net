/* eslint-disable react/require-default-props */
import React from 'react';
import Helmet from 'react-helmet';
import Post from '../models/Post';

interface SEO {
  postNode: Post;
  postPath: string;
  postSEO: boolean;
}

const siteUrl = 'https://grantforrest.net';

export const SEO = (props: SEO) => {
  const { postNode, postPath, postSEO } = props;
  let title;
  let description;
  let postURL;
  const realPrefix ='';
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title;
    description = postNode.excerpt;
    // image = config.siteBanner;
    postURL = siteUrl + realPrefix + postPath;
  } else {
    title = 'Grant Forrest';
    description = 'Grant Forrest\'s blog and portfolio';
    // image = config.siteBanner;
  }
  const blogURL = siteUrl;
  let schemaOrgJSONLD: any[] = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': blogURL,
      url: blogURL,
      name: title,
      alternateName: '',
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        // @ts-ignore
        '@id': postURL,
        // @ts-ignore
        url: postURL,
        name: title,
        alternateName: '',
        headline: title,
        // image: {
        //   '@type': 'ImageObject',
        //   url: image,
        // },
        description,
        datePublished: postNode.frontmatter.date,
        dateModified: postNode.frontmatter.date,
        author: {
          '@type': 'Person',
          name: 'Grant Forrest',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Grant Forrest',
          // logo: {
          //   '@type': 'ImageObject',
          //   url: siteUrl + realPrefix + config.siteLogo,
          // },
        },
        isPartOf: blogURL,
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': blogURL,
        },
      },
    ];
  }
  return (
    <Helmet>
      <html lang="en" />
      <title>Grant Forrest</title>
      <meta name="description" content="Grant Forrest's blog and portfolio" />
      {/* <meta name="image" content={image} /> */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
    </Helmet>
  );
};
