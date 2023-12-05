import React from 'react';
import classnames from 'classnames';

const ThumbnailImage = ({ alt, src, className, rounded, small }) => {
  return (
    <img
      alt={alt}
      src={src}
      className={`img-thumbnail list-thumbnail align-self-center ${className}  ${classnames(
        {
          'rounded-circle': rounded,
          small,
        }
      )}`}
      style={{
        "height":"13vh",
        "margin":"1vh 0 0 0"
        
      }}
    />
  );
};

export default React.memo(ThumbnailImage);
