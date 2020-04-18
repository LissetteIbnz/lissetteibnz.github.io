import React from 'react';
import * as classes from './not-found.styles';

export const NotFound = () => (
  <div className={classes.maskImage}>
    <div className={classes.text}>
      404
      <h2>Page not found</h2>
      <p>más perdido que el barco del arroz...</p>
    </div>
  </div>
);
