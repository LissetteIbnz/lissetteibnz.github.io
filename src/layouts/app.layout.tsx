import React from 'react';
import { Footer, AppMenu, ButtonTop } from '@/common/components';
import * as classes from './app.styles';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.container}>
      <AppMenu />
      <main className={classes.main}>{children}</main>
      <Footer />
      <ButtonTop />
    </div>
  );
};
