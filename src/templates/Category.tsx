import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Summary, SingleColumn } from '../components';
import { Heading } from 'grommet';
import config from '../../config/site';
import kebabCase from 'lodash/kebabCase';
import PageProps from '../models/PageProps';

export default class Category extends React.PureComponent<PageProps> {
  public render() {
    const { posts, categoryName } = this.props.pathContext;
    const totalCount = posts ? posts.length : 0;
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${categoryName}"`;

    return (
      <Layout>
        <Helmet title={`${categoryName} | ${config.siteTitle}`} />
        <SingleColumn>
          <header>
            <Link to="/">{config.siteTitle}</Link>
            <Heading level="2">Category &ndash; {categoryName}</Heading>
            <i>
              {subline} (See <Link to="/categories">all categories</Link>)
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
