import React from 'react';
import { css } from 'emotion';
import { theme } from '@/core/theme';
import { config } from '@/core/config';
import { Twitter, LinkedIn, GitHub, Email } from '@/common/components';

export const Footer = () => (
  <footer
    className={css`
      background: ${theme.colors.purple};
      color: white;
      margin-top: 70px;
      padding: 4rem;
      height: 80px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    `}
  >
    <Twitter url={config.twitter} />
    <LinkedIn url={config.linkedin} />
    <GitHub url={config.github} />
    <Email url={config.email} />
  </footer>
);
