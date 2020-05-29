import { css } from 'emotion';
import type { Theme } from '@/core/theme';

export const fixed = (theme: Theme) => css`
  margin-bottom: 0;
  background: #333;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  min-height: 50px;
  padding: 20px 0;
  box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);

  ${theme.breakpoints.maxMD} {
    padding: 0;
  }
`;

export const container = (theme: Theme) => css`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: normal;

  & > div {
    padding: 0;
    margin: 15px 26px;
  }

  a {
    padding: 0;
    margin: 19px 26px;
    font-size: 1.2rem;
    font-weight: normal;
    letter-spacing: 0.5px;
    -webkit-transition: all ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
    text-transform: uppercase;

    &:first-child {
      color: ${theme.common.white};
      font-size: 1.5rem;
      span {
        font-style: italic;
        color: ${theme.primary.main};
      }
    }
  }

  ${theme.breakpoints.maxMD} {
    a {
      &:not(:first-child) {
        display: none;
      }

      margin: 15px 26px;
    }

    & > div {
      margin: 12px;
    }
  }
`;

export const responsive = (theme: Theme) => css`
  ${theme.breakpoints.maxMD} {
    flex-direction: column;
    align-items: center;
    & a:not(:first-child) {
      display: block;
    }
  }
`;

export const toggle = (theme: Theme) => css`
  ${theme.breakpoints.maxMD} {
    display: none;
  }
`;
