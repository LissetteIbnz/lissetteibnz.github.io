import React from 'react';
import { css } from 'emotion';

const root = css`
  max-width: 1100px;
  margin: 0 auto;
`;

export const CenteredLayout: React.FC = ({ children }) => <div className={root}>{children}</div>;
