/**
 * Centers child nodes passed to it
 */

import React from "react";
import PropTypes from "prop-types";
import widths from "../../constants/widths";

export default function Centered({ width, children }) {
  const widthClassToApply =
    width && widths[width] ? widths[width] : widths.full;

  return <div className={`text-center ${widthClassToApply}`}>{children}</div>;
}

Centered.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
};
