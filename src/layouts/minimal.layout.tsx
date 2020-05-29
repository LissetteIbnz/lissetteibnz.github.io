import React from 'react';
import { useTheme } from '@/core/theme';
import { AppMenu, Footer } from '@/common/components';
import * as classes from './app.styles';

export const MinimalLayout: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <div className={classes.container(theme)}>
      <AppMenu />
      {children}
      <Footer />
    </div>
  );
};
