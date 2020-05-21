import React from 'react';
import { ThemeContext } from './theme.context';
import { Theme } from './theme.vm';

export const useAppTheme = (): Theme => React.useContext(ThemeContext).theme;
