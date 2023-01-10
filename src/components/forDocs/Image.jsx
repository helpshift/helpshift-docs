/**
 * Component used for showing images of particular sizes
 */

import React from "react";
import PropTypes from "prop-types";
import widths from "../../constants/widths";

export default function Image({ width, src, centered, alt }) {
  const widthClassToApply =
    width && widths[width] ? widths[width] : widths.full;

  return (
    <img
      src={src}
      className={`${widthClassToApply} ${centered ? "block mx-auto" : ""} `}
      alt={alt}
    />
  );
}

Image.propTypes = {
  width: PropTypes.oneOf(["quarter", "half", "major", "full"]),
  src: PropTypes.string.isRequired,
  centered: PropTypes.bool,
  alt: PropTypes.string,
};
