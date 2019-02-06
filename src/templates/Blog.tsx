import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, Summary, Pagination, SingleColumn } from '../components';
import { Heading } from 'grommet';
import Helmet from 'react-helmet';
import config from '../../config/site';
import Data from '../models/Data';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

export default class BlogPage extends React.Component<Props> {
  public render() {
    const { currentPage, totalPages } = this.props.pageContext;

    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;

    return (
      <Layout>
        <SingleColumn>
          <Helmet title={`Posts | ${config.siteTitle}`} />
          <header>
            <Link to="/">{config.siteTitle}</Link>
            <Heading level="2">Latest stories ({totalCount})</Heading>
          </header>
          <div>
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
            <Pagination currentPage={currentPage} totalPages={totalPages} url={'blog'} />
          </div>
        </SingleColumn>
      </Layout>
    );
  }
}
export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
