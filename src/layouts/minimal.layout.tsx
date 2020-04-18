import React from 'react';
import { AppMenu, Footer } from '@/common/components';
import * as classes from './app.styles';

export const MinimalLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.container}>
      <AppMenu />
      {children}
      <Footer />
    </div>
  );
};
