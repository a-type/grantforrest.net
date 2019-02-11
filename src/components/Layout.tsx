import React, { SFC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import split from 'lodash/split';
import { Grommet } from 'grommet';
import theme from '../theme';
import Helmet from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: hidden !important;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;

export const Layout: SFC<{ title: string }> = ({ children, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            buildTime(formatString: "DD.MM.YYYY")
          }
        }
      `}
      render={data => (
        <Grommet theme={theme} full>
          <GlobalStyle />
          <Helmet title={`${title} | Grant Forrest`} />
          {children}
          <Footer>
            &copy; {split(data.site.buildTime, '.')[2]} Grant Forrest. All rights reserved. <br />
          </Footer>
        </Grommet>
      )}
    />
  );
};
