import React from 'react';
import { css } from 'emotion';
import { useTheme } from '@/core/theme';

export const Container: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      className={css`
        ${theme.breakpoints.maxMD} {
          padding: 0 20px;
          word-wrap: break-word;
        }
      `}
    >
      {children}
    </div>
  );
};
