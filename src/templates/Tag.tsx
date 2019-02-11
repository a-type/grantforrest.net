import React from 'react';
import Link from 'gatsby-link';
import PageProps from '../models/PageProps';
import { Summary, Layout, SingleColumn } from '../components';
import { Heading } from 'grommet';
import kebabCase from 'lodash/kebabCase';

export default class TagTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { posts, tagName } = this.props.pathContext;
    const totalCount = posts ? posts.length : 0;
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tagName}"`;

    return (
      <Layout title={`Tag: ${tagName}`}>
        <SingleColumn>
          <header>
            <Link to="/">Home</Link>
            <Heading level="2">Tag &ndash; {tagName}</Heading>
            <i>
              {subline} (See <Link to="/tags">all tags</Link>)
            </i>
          </header>
          <div>
            {posts
              ? posts.map((post: any, index) => (
                  <Summary
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.excerpt}
                    slug={kebabCase(post.frontmatter.title)}
                    timeToRead={post.timeToRead}
                    category={post.frontmatter.category}
                    key={index}
                  />
                ))
              : null}
          </div>
        </SingleColumn>
      </Layout>
    );
  }
}
