import React from 'react';
import { css } from 'emotion';

export const Title: React.FC = ({ children }) => (
  <h1
    className={css`
      margin: 1rem 0;
      text-align: center;
    `}
  >
    {children}
  </h1>
);
