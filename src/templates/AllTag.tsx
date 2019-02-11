import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Layout, SingleColumn } from '../components';
import { Heading } from 'grommet';

import PageProps from '../models/PageProps';

export default class AllTagTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { tags } = this.props.pathContext;
    if (tags) {
      return (
        <Layout title="Tags">
          <SingleColumn>
            <header>
              <Link to="/">Home</Link>
              <Heading level="2">Tags</Heading>
            </header>
            <div>
              {tags.map((tag, index: number) => (
                <Heading level="1" key={index}>
                  <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                </Heading>
              ))}
            </div>
          </SingleColumn>
        </Layout>
      );
    }
  }
}
