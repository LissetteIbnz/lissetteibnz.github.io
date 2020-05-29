import React from 'react';
import { useTheme } from '@/core/theme';
import { Footer, AppMenu, ButtonTop } from '@/common/components';
import * as classes from './app.styles';

export const AppLayout: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <div className={classes.container(theme)}>
      <AppMenu />
      <main className={classes.main(theme)}>{children}</main>
      <Footer />
      <ButtonTop />
    </div>
  );
};
