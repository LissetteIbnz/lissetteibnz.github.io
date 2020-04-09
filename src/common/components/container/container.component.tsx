import React from 'react';
import { css } from 'emotion';
import { theme } from '@/core/theme';

export const Container: React.FC = ({ children }) => (
  <div
    className={css`
      ${theme.breakpoints.bpMaxMD} {
        padding: 0 20px;
      }
    `}
  >
    {children}
  </div>
);
