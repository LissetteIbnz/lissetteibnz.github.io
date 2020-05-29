import React from 'react';
import { literals } from '@/core/i18n';
import { LoaderOptions } from './loader.vm';
import { Loader } from './loader.component';

interface Context {
  loading: boolean;
  options: LoaderOptions;
  setLoading: (loading: boolean) => void;
  setOptions: (options: LoaderOptions) => void;
}

export const LoaderContext = React.createContext<Context>(null);

export const LoaderProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<LoaderOptions>({
    message: literals.common.loading,
  });

  return (
    <LoaderContext.Provider
      value={{
        loading,
        setLoading,
        options,
        setOptions,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
