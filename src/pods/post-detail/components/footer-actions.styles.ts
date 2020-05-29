import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const root = css`
  margin-bottom: 2rem;
`;

export const comment = css`
  padding: 1rem 0;
`;

const maxHeightForCommentPanel = (theme: Theme) => css`
  height: 213px;
  ${theme.breakpoints.maxSM} {
    height: 120px;
  }
`;

export const previewMarkdown = (theme: Theme) => css`
  padding: 0.8rem 1.2rem;
  display: block;
  color: ${theme.common.black};
  border-radius: ${theme.shape.borderRadius};
  background-color: ${theme.common.white};
  overflow: auto;
  border: 1px solid rgb(118, 118, 118);
  ${maxHeightForCommentPanel(theme)}
  p {
    margin: 0 0 0.2rem;
    font-size: 16px;
  }
`;

export const formComment = css`
  margin-bottom: 0.6rem;
`;

export const inputComment = (theme: Theme) => css`
  font: inherit;
  font-size: 16px;
  width: 100%;
  padding: 0.8rem 1.2rem;
  display: block;
  color: ${theme.common.black};
  border-radius: ${theme.shape.borderRadius};
  background-color: ${theme.common.white};
  ${maxHeightForCommentPanel(theme)}
`;

export const actions = css`
  display: flex;
  justify-content: space-between;
  button {
    margin: 0;
  }
  button + button {
    margin-left: 0.8rem;
  }
`;

export const link = (theme: Theme) => css`
  float: right;
  text-decoration: none;
  transition-property: all;
  transition-duration: 0.15s, 0.15s, 0.15s;
  transition-timing-function: ease-in, ease-in, ease-in;
  transition-delay: 0s, 0s, 0s;
  color: ${theme.text.primary};
  ::before {
    content: '👉';
    padding-right: 4px;
  }
  transition: ${theme.transition.backgroundAndColor};
`;
