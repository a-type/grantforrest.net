import React from 'react';
import { Link } from '../components';
import kebabCase from 'lodash/kebabCase';
import Post from '../models/Post';
import { Box } from 'grommet';

interface Props {
  next: Post;
  prev: Post;
}

export class PrevNext extends React.PureComponent<Props> {
  public render() {
    const { prev, next } = this.props;
    return (
      <Box margin={{ vertical: 'small' }}>
        <div>
          <label>Previous: </label>
          {prev ? <Link to={`/blog/${kebabCase(prev.frontmatter.title)}`}>{prev.frontmatter.title}</Link> : <span>None</span>}
        </div>
        <div>
          <label>Next: </label>
          {next ? <Link to={`/blog/${kebabCase(next.frontmatter.title)}`}>{next.frontmatter.title}</Link> : <span>None</span>}
        </div>
      </Box>
    );
  }
}
