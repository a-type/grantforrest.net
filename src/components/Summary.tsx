import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

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
      <Post>
        <Title>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Title>
        <i>
          {date} &mdash; {timeToRead} Min Read &mdash; In
          <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
        </i>
        <Excerpt>{excerpt}</Excerpt>
      </Post>
    );
  }
}
