import React from 'react';

export const useComponentIsMounted = (): boolean => {
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
};
