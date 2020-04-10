import { css } from 'emotion';
import { theme } from '@/core/theme';

export const wrapper = css`
  overflow: hidden;
`;

export const img = css`
  object-fit: cover;
  transition: all ease 0.3s;
  opacity: 0;

  ${theme.breakpoints.bpMaxSM} {
    max-height: 200px;
  }
`;

export const loading = css`
  opacity: 1;
  filter: blur(15px);
`;

export const loaded = css`
  opacity: 1;
`;

export const description = css`
  p {
    padding-top: 0.2em;
    text-align: center;
    font-size: 14px;
    margin: 0;
    a {
      font-size: inherit;
    }
  }
`;
