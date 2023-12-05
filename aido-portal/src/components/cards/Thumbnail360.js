import React from 'react';
import classnames from 'classnames';

const ThumbnailImage = ({ alt, src, className, rounded, small }) => {
  return (
    <img
      alt={alt}
      src={src}
      style={{
        "width":"unset !important",
        "height":"40px",
        "marginRight":"0.5rem"
      }}
      className={`img-thumbnail align-self-center ${className}  ${classnames(
        {
          'rounded-circle': rounded,
          small,
        }
      )}`}
    />
  );
};

export default React.memo(ThumbnailImage);
