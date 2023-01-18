/**
 * Displays two child nodes "side by side", even on mobile
 */

import React from "react";
import PropTypes from "prop-types";

export default function SideBySide({ children }) {
  return <div className="grid grid-cols-2 gap-2">{children}</div>;
}

SideBySide.propTypes = {
  children: PropTypes.node,
};
