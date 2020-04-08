import React from 'react';
import { cx } from 'emotion';
import { useComponentIsMounted } from '@/common/hooks';
import * as classes from './lazy-image.styles';

interface LazyImageProps {
  url: string;
  alt: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  description?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  alt,
  url,
  description,
  height = '320px',
  width = '100%',
  rounded = false,
}) => {
  const isMounted = useComponentIsMounted();
  const [imageSrc, setImageSrc] = React.useState<string>(url);
  const [imageRef, setImageRef] = React.useState<HTMLImageElement>();
  const [imgIsLoading, setImgIsLoading] = React.useState<boolean>(true);

  const onLoad = () => {
    setImgIsLoading(false);
  };

  React.useEffect(() => {
    let observer: IntersectionObserver;
    const observerOptions: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 0.1,
    };

    if (imageRef && imageSrc !== url) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!isMounted && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setImageSrc(url);
              observer.unobserve(imageRef);
            }
          });
        }, observerOptions);
        observer.observe(imageRef);
      } else {
        setImageSrc(url);
      }
    }
    return () => {
      if (observer?.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [url, imageSrc, imageRef]);

  const containerStyle = cx(classes.container, rounded && classes.rounded);
  return (
    <div className={containerStyle}>
      <img
        ref={setImageRef}
        className={cx(classes.img, {
          [classes.loading]: imgIsLoading,
          [classes.loaded]: !imgIsLoading,
        })}
        src={url}
        alt={alt}
        width={width}
        height={height}
        onLoad={onLoad}
      />
      {description && (
        <p
          className={classes.description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      )}
    </div>
  );
};
