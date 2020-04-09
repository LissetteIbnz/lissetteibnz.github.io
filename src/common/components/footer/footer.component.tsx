import React from 'react';
import { config } from '@/core/config';
import { Twitter, LinkedIn, GitHub, Email } from '@/common/components';
import { MakeWithLove } from './components';
import * as classes from './footer.styles';

export const Footer = () => (
  <footer className={classes.root}>
    <MakeWithLove />
    <Twitter url={config.twitter} />
    <LinkedIn url={config.linkedin} />
    <GitHub url={config.github} />
    <Email url={config.email} />
  </footer>
);
