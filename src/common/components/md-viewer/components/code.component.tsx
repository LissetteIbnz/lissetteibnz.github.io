import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwl';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { cx } from 'emotion';
import { useTheme } from '@/core/theme';
import * as classes from './code.styles';

interface CodeProps {
  value: string;
  language?: Language;
}

export const Code: React.FC<CodeProps> = ({ language, value }) => {
  const appTheme = useTheme();
  return (
    <Highlight {...defaultProps} code={value} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={classes.wrapper} style={style}>
          <pre className={cx(className, classes.pre(appTheme))}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                })}
              >
                <span className={classes.numbers}>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
