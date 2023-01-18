/**
 * Centers child nodes passed to it
 */

import React from "react";
import PropTypes from "prop-types";
import htmlElementWidths from "../../constants/htmlElementWidths";

export default function Centered({ width, children }) {
  const widthClassToApply =
    width && htmlElementWidths[width]
      ? htmlElementWidths[width]
      : htmlElementWidths.full;

  return <div className={`text-center ${widthClassToApply}`}>{children}</div>;
}

Centered.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
};
