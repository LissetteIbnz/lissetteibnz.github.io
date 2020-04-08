import React from 'react';
import { css } from 'emotion';
import { Footer } from '@/common/components';

const root = css`
  width: 90%;
  max-width: 1000px;
  margin: 2rem auto 0px;
  padding: 7rem 10px 10px;
`;

export const CenteredLayout: React.FC = ({ children }) => (
  <>
    <div className={root}>{children}</div>
    <Footer />
  </>
);
