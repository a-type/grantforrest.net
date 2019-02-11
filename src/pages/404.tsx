import * as React from 'react';
import { Layout } from '../components';
import { Link } from 'gatsby';

import 'typeface-noto-serif';
import 'typeface-open-sans';

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <Layout title="Not found">
        <header>
          <Link to="/">Home</Link>
        </header>
        <div>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    );
  }
}
