import React from 'react';
import { cx } from 'emotion';
import * as classes from './pre-loader.styles';

interface PreLoaderProps {
  loading: boolean;
  message?: string;
}

export const PreLoader: React.FC<PreLoaderProps> = ({ loading, children }) => {
  const [delay, setDelay] = React.useState(true);

  React.useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setDelay(false);
      }, 700);
    }
  }, [loading]);

  return delay ? (
    <div className={cx(classes.preloader, !loading && classes.slideUp)}>
      <div className={cx(classes.spinner, !loading && classes.spinnerOff)}>
        <span className="sk-inner-circle"></span>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};
