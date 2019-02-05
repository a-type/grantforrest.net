import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Layout, Title } from '../components';
import { Heading } from 'grommet';

import config from '../../config/site';
import PageProps from '../models/PageProps';

export default class AllCategoryTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <Layout>
          <Helmet title={`Categories | ${config.siteTitle}`} />
          <header>
            <Link to="/">{config.siteTitle}</Link>
            <Heading level="2">Categories</Heading>
          </header>
          <div>
            {categories.map((category, index: number) => (
              <Title key={index}>
                <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
              </Title>
            ))}
          </div>
        </Layout>
      );
    }
  }
}
