import React from 'react';
import { config } from '@/core/config';
import { useTheme } from '@/core/theme';
import { Twitter, LinkedIn, GitHub, Email } from '@/common/components';
import { MakeWithLove } from './components';
import * as classes from './footer.styles';

export const Footer = () => {
  const theme = useTheme();
  return (
    <footer className={classes.root(theme)}>
      <MakeWithLove />
      <Twitter url={config.twitter} theme={theme} />
      <LinkedIn url={config.linkedin} theme={theme} />
      <GitHub url={config.github} theme={theme} />
      <Email url={config.email} theme={theme} />
    </footer>
  );
};
