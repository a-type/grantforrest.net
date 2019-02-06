import React, { SFC } from 'react';
import { Box, ResponsiveContext } from 'grommet';

export const SingleColumn: SFC<{}> = ({ children }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box align="center">
        <Box pad={size !== 'small' ? 'large' : 'medium'}>{children}</Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);
