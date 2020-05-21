import React from 'react';
import { css } from 'emotion';

export const Title: React.FC = ({ children }) => (
  <h1
    className={css`
      text-align: center;
    `}
  >
    {children}
  </h1>
);
