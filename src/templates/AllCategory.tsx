import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Layout, SingleColumn } from '../components';
import { Heading } from 'grommet';

import PageProps from '../models/PageProps';

export default class AllCategoryTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <Layout title="Categories">
          <SingleColumn>
            <header>
              <Link to="/">Home</Link>
              <Heading level="2">Categories</Heading>
            </header>
            <div>
              {categories.map((category, index: number) => (
                <Heading key={index}>
                  <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
                </Heading>
              ))}
            </div>
          </SingleColumn>
        </Layout>
      );
    }
  }
}
