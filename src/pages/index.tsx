import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Summary, Link, Avatar } from '../components';
import PageProps from '../models/PageProps';
import { Grid, Box, Heading, Paragraph, ResponsiveContext, DropButton } from 'grommet';

import 'typeface-noto-serif';
import 'typeface-open-sans';

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;
    return (
      <Layout title="Home">
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill="vertical" align="center" justify="start" pad="large">
              <Grid
                columns={size === 'small' ? ['auto'] : ['small', 'auto']}
                rows={size === 'small' ? ['auto', 'auto'] : ['auto']}
                gap="medium"
                align="center"
              >
                <div>
                  <Avatar />
                </div>
                <Box>
                  <i>The personal site of </i>
                  <Heading margin={{ top: 'small', bottom: 'medium' }}>Grant Forrest</Heading>
                  <Box direction="row">
                    <DropButton
                      margin={{ right: 'small' }}
                      {...{ label: 'About' } as any}
                      dropContent={
                        <Box pad="medium">
                          <Paragraph>
                            I'm trying to grow more and more into a single person and remove the compartmentalization that separates my
                            work, faith, ideas and emotions. I want to try to practice the kind of integrity and simple honesty which I have
                            come to understand defines humility.
                          </Paragraph>
                          <Paragraph>
                            Obviously, if we work together my intention is to behave professionally, and if we spend life together than I'm
                            hopefully not going to flood you with software concepts. But maybe by putting both 'sides' in the same place I
                            can help lend some context on why I am who I am.
                          </Paragraph>
                        </Box>
                      }
                    />
                  </Box>
                </Box>
              </Grid>
              <Box background="light" pad="medium">
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
            </Box>
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
