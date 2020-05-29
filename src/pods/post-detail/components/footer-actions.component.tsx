import React from 'react';
import { literals } from '@/core/i18n';
import { useTheme, Theme } from '@/core/theme';
import { MarkdownViewer, Button } from '@/common/components';
import { Post } from '../post-details.vm';
import * as classes from './footer-actions.styles';

const MarkdownLogo: React.FC<{ theme: Theme }> = ({ theme }) => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill={theme.text.primary}
        fillRule="evenodd"
        d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z"
      />
    </svg>
  </div>
);

interface FooterActionsProps {
  urlGitHub: Post['urlGitHub'];
}

export const FooterActions: React.FC<FooterActionsProps> = ({ urlGitHub }) => {
  const theme = useTheme();
  const [comment, setComment] = React.useState<string>('');
  const [showMarkdown, setShowMarkdown] = React.useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleOnClickPreview = () => {
    setShowMarkdown(prev => !prev);
  };

  const handleOnClickSend = () => {
    console.log('Pending');
  };

  const renderComment = () =>
    showMarkdown ? (
      <div className={classes.previewMarkdown(theme)}>
        <MarkdownViewer content={comment} />
      </div>
    ) : (
      <textarea
        onChange={handleOnChange}
        value={comment}
        className={classes.inputComment(theme)}
        cols={30}
        rows={5}
      ></textarea>
    );

  return (
    <div className={classes.root}>
      <a className={classes.link(theme)} href={urlGitHub} target="_blank" rel="noopener noreferrer">
        {literals.post.showGithub}
      </a>
      <form className={classes.comment}>
        <div>
          <h4>{literals.post.addComment}</h4>
          <div className={classes.formComment}>{renderComment()}</div>
          <div className={classes.actions}>
            <MarkdownLogo theme={theme} />
            <div>
              <Button onClick={handleOnClickPreview}>
                {showMarkdown ? literals.common.editing : literals.common.preview}
              </Button>
              <Button color="primary" onClick={handleOnClickSend}>
                {literals.common.send}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
