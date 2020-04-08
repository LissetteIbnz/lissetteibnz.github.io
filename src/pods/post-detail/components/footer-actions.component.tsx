import React from 'react';
import { css } from 'emotion';
import { Post } from '../post-details.vm';

interface FooterActionsProps {
  urlGitHub: Post['urlGitHub'];
}

export const FooterActions: React.FC<FooterActionsProps> = ({ urlGitHub }) => (
  <div
    className={css`
      padding-top: 1.2rem;
    `}
  >
    <a
      className={css`
        float: right;
        font-size: 16px;
        text-decoration: none;
        transition-property: all;
        transition-duration: 0.15s, 0.15s, 0.15s;
        transition-timing-function: ease-in, ease-in, ease-in;
        transition-delay: 0s, 0s, 0s;
        color: rgba(0, 0, 0, 0.54);
        :hover {
          color: rgba(0, 0, 0, 0.84);
          text-decoration: underline;
        }
      `}
      href={urlGitHub}
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub
    </a>
  </div>
);
