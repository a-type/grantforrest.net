import React, { SFC } from 'react';
import { Image } from 'grommet';
import styled from 'styled-components';

const CircleImage = styled(Image)`
  border-radius: 100%;
`;

export const Avatar: SFC<{ size?: string }> = ({ size = '100%', ...props }) => (
  <CircleImage
    {...props}
    style={{ width: size }}
    src="/assets/avatar.jpg"
    a11yTitle="A picture of me and my wife. I like it."
    fit="cover"
  />
);
