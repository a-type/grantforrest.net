import React from 'react';
import { graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Layout, SEO, PrevNext, SingleColumn, Link } from '../components';
import { Heading, Paragraph, Text } from 'grommet';
import '../utils/prismjs-theme.css';
import PathContext from '../models/PathContext';
import Post from '../models/Post';
import Rehype from 'rehype-react';

const renderAst = new Rehype({
  createElement: React.createElement,
  components: {
    a: Link,
    h1: Heading,
    h2: props => <Heading {...props} level="2" />,
    h3: props => <Heading {...props} level="3" />,
    h4: props => <Heading {...props} level="4" />,
    h5: props => <Heading {...props} level="5" />,
    p: Paragraph,
    span: Text,
  },
}).Compiler;

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

export default class PostPage extends React.PureComponent<Props> {
  public render() {
    const { prev, next } = this.props.pathContext;
    const post = this.props.data.markdownRemark;
    return (
      <Layout title={post.frontmatter.title}>
        {post && (
          <SingleColumn>
            <SEO postPath={post.fields.slug} postNode={post} postSEO />
            <header>
              <Link to="/">Home</Link>
              <Heading level="2">{post.frontmatter.title}</Heading>
              <i>
                {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}
                <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
              </i>
            </header>
            <div>
              {renderAst(post.htmlAst)}
              {post.frontmatter.tags ? (
                <i>
                  Tags: &#160;
                  {post.frontmatter.tags.map((tag, i) => (
                    <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                      <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                    </Link>
                  ))}
                </i>
              ) : null}
              <PrevNext prev={prev} next={next} />
            </div>
          </SingleColumn>
        )}
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
        tags
      }
      timeToRead
    }
  }
`;
