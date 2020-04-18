import React from 'react';
import { literals } from '@/core/i18n';
import { Post } from '../post-details.vm';
import * as classes from './footer-actions.styles';

interface FooterActionsProps {
  urlGitHub: Post['urlGitHub'];
}

export const FooterActions: React.FC<FooterActionsProps> = ({ urlGitHub }) => (
  <div className={classes.root}>
    <a className={classes.link} href={urlGitHub} target="_blank" rel="noopener noreferrer">
      {literals.post.showGithub}
    </a>
  </div>
);
