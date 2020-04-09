import { css } from 'emotion';
import { theme } from '@/core/theme';

const { oposite: baseColor, highlight: accentColor } = theme.text;

export const fixed = css`
  margin-bottom: 0;
  background-color: #333;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  min-height: 50px;
  padding: 20px 0;

  ${theme.breakpoints.bpMaxMD} {
    padding: 0;
  }
`;

export const container = css`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      flex: 1;
      color: ${baseColor};
      font-size: 1.5rem;
      align-self: flex-start;
      span {
        font-style: italic;
        color: ${accentColor};
      }
    }

    &:hover,
    &:focus {
      color: ${baseColor};
    }

    ${theme.breakpoints.bpMaxMD} {
      &:not(:first-child) {
        display: none;
      }
    }
  }
`;

export const responsive = css`
  ${theme.breakpoints.bpMaxMD} {
    flex-direction: column;
    align-items: center;
    & a:not(:first-child) {
      display: block;
    }
  }
`;
