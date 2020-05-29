import React from 'react';
import * as classes from './title.styles';

export const Title: React.FC = ({ children }) => <h1 className={classes.title}>{children}</h1>;
