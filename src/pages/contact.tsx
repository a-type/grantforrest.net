import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Layout } from '../components';
import { Heading } from 'grommet';

import config from '../../config/site';
import PageProps from '../models/PageProps';

export default class ContactPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <header>
          <Link to="/">{config.siteTitle}</Link>
          <Heading>Contact</Heading>
        </header>
        <div>
          <p>I don't really do social stuff.</p>
        </div>
      </Layout>
    );
  }
}
