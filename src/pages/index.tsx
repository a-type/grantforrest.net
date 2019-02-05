import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, Article } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/site';
import { Grid, Box, Button } from 'grommet';

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;
    return (
      <Layout>
        <Helmet title={`Homepage | ${config.siteTitle}`} />
        <Grid
          columns={['auto', 'fill']}
          rows={['fill']}
          gap="small"
          areas={[{ name: 'intro', start: [0, 0], end: [0, 0] }, { name: 'content', start: [1, 0], end: [1, 0] }]}
          fill="vertical"
        >
          <Box gridArea="intro" background="light-2" pad="medium">
            <h1>Name</h1>
            <p>Summary text</p>
            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
            <Link to="/blog">
              <Button>Blog</Button>
            </Link>
          </Box>
          <Box gridArea="content" pad="medium">
            <h2>About Me</h2>
            <p>Intro text</p>
            <hr />
            <h2>Latest Blog</h2>
            {edges.map(post => (
              <Article
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.excerpt}
                timeToRead={post.node.timeToRead}
                slug={post.node.fields.slug}
                category={post.node.frontmatter.category}
                key={post.node.fields.slug}
              />
            ))}
            <p className={'textRight'}>
              <Link to={'/blog'}>All articles ({totalCount})</Link>
            </p>
          </Box>
        </Grid>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;
