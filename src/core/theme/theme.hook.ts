import React from 'react';
import { ThemeContext } from './theme.context';
import { Context } from './theme.vm';

export const useAppTheme = (): Context => React.useContext(ThemeContext);
