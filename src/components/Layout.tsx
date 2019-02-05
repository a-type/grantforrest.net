import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import split from 'lodash/split';
import { Grommet } from 'grommet';
import theme from '../../config/theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }

  html {
    overflow-y: hidden !important;
  }

  body {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

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
            {children}
            <Footer>
              &copy; {split(data.site.buildTime, '.')[2]} Grant Forrest. All rights reserved. <br />
            </Footer>
          </Grommet>
        )}
      />
    );
  }
}
