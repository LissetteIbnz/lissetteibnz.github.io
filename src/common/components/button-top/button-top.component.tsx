import React from 'react';
import { cx } from 'emotion';
import * as classes from './button-top.styles';

const topEdge = 60;

export const ButtonTop = () => {
  const [isHidden, setIsHidden] = React.useState(true);

  const scrollFunction = () => {
    const checkIfCrossEdge =
      document.body.scrollTop > topEdge || document.documentElement.scrollTop > topEdge;

    setIsHidden(!checkIfCrossEdge);
  };

  React.useEffect(() => {
    document.addEventListener('scroll', scrollFunction);

    return () => document.removeEventListener('scroll', scrollFunction);
  }, []);

  const handleOnClick = function () {
    window.scrollTo(0, 0);
  };

  return (
    <button
      aria-label="Scroll to top"
      className={cx(classes.button, { [classes.hide]: isHidden })}
      onClick={handleOnClick}
    >
      <span className={classes.chevron}></span>
    </button>
  );
};
