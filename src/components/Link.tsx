import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const Link = styled(GatsbyLink)`
  color: #323242;
  text-decoration: underline;
`;

export const WrapLink = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;
`;
