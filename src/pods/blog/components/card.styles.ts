import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const container = (theme: Theme) => css`
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  padding: 1.2rem;
  margin-bottom: 5em;
  transition: all 0.2s ease 0s;
  background: ${theme.background.paper};
  box-shadow: ${theme.shadows[1]};

  ${theme.breakpoints.maxMD} {
    :first-child {
      margin-top: 2em;
    }
  }

  ${theme.breakpoints.maxSM} {
    padding: 1rem;
    margin-bottom: 1.5em;
  }

  &:hover {
    box-shadow: ${theme.shadows[2]};
  }
  &:active {
    box-shadow: ${theme.shadows[3]};
  }
`;

export const header = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-size: 15px;
    padding: 0;
    margin: 0;
    color: ${theme.text.hint};
    & > span::before {
      padding: 8px;
      content: '·';
    }
  }
`;

export const tags = (theme: Theme) => css`
  display: flex;
  justify-content: start;
  flex-flow: row wrap;

  ${theme.breakpoints.maxMD} {
    display: none;
  }

  & div {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-weight: 300;
    line-height: 28px;
    border-radius: 3px;
    padding: 3px 15px;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

export const brief = css`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`;
