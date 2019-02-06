import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Summary, Link } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/site';
import { Grid, Box, Heading, Paragraph, ResponsiveContext } from 'grommet';

import 'typeface-noto-serif';
import 'typeface-open-sans';

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;
    return (
      <Layout>
        <Helmet title={`Homepage | ${config.siteTitle}`} />
        <ResponsiveContext.Consumer>
          {size => (
            <Grid
              columns={size !== 'small' ? ['auto', 'fill'] : ['fill']}
              rows={size !== 'small' ? ['fill'] : ['auto', 'fill']}
              gap="small"
              areas={[
                { name: 'intro', start: [0, 0], end: [0, 0] },
                { name: 'content', start: size !== 'small' ? [1, 0] : [0, 1], end: size !== 'small' ? [1, 0] : [0, 1] },
              ]}
              fill="vertical"
            >
              <Box gridArea="intro" background="light" pad="medium" align="end">
                <Heading>Grant Forrest</Heading>
                <Paragraph>Updated bi-yearly.</Paragraph>
              </Box>
              <Box gridArea="content" background="light" pad="medium">
                {edges.map(post => (
                  <Summary
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <Paragraph>
                  <Link to={'/blog'}>All posts ({totalCount})</Link>
                </Paragraph>
              </Box>
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            category
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;
