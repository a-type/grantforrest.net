import * as React from 'react';
import { Layout } from '../components';
import Helmet from 'react-helmet';
import config from '../../config/site';
import { Link } from 'gatsby';

import 'typeface-noto-serif';
import 'typeface-open-sans';

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <Layout>
        <Helmet title={`404 not found | ${config.siteTitle}`} />
        <header>
          <Link to="/">{config.siteTitle}</Link>
        </header>
        <div>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    );
  }
}
