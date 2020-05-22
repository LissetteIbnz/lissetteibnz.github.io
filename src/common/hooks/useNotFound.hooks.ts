import React from 'react';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from '@/core/router';

export const useNotFound = () => {
  const history = useHistory();

  return React.useCallback(() => {
    history.push(switchRoutes.notFound);
  }, [history]);
};
