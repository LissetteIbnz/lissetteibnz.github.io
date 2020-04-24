import React from 'react';
import { LoaderContext } from './loader.context';
import { LoaderOptions } from './loader.vm';

export const useLoaderContext = (
  loading: boolean
): {
  setLoading: (loading: boolean) => void;
  setOptions: (options: LoaderOptions) => void;
} => {
  const { setLoading, setOptions } = React.useContext(LoaderContext);

  React.useEffect(() => {
    setLoading(loading);
  }, [loading]);

  return {
    setLoading,
    setOptions,
  };
};
