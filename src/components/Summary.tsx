import React from 'react';
import { Link } from '../components';
import kebabCase from 'lodash/kebabCase';
import { Heading, Paragraph, Box } from 'grommet';

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  timeToRead: number;
  category: string;
}

export class Summary extends React.PureComponent<Props> {
  public render() {
    const { title, date, excerpt, slug, timeToRead, category } = this.props;

    return (
      <Box margin={{ top: 'medium' }}>
        <Link to={`/blog/${slug}`}>
          <Heading level="3">{title} </Heading>
        </Link>
        <i>
          {date} &mdash; {timeToRead} Min Read &mdash; In <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
        </i>
        <Paragraph>{excerpt}</Paragraph>
      </Box>
    );
  }
}
