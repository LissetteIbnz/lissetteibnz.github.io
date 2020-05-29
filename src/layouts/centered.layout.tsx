import React from 'react';
import { css } from 'emotion';
import { Theme, useTheme } from '@/core/theme';

const root = (theme: Theme) => css`
  width: 90%;
  max-width: ${theme.breakpoints.lgSize};
  margin: 2rem auto 0px;
  padding: 7rem 10px 10px;
`;

export const CenteredLayout: React.FC = ({ children }) => {
  const theme = useTheme();
  return <div className={root(theme)}>{children}</div>;
};
