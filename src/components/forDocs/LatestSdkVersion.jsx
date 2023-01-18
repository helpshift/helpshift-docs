/**
 * This component currently does nothing, but is kept as a legacy
 * remnant from the migration. In the future, we might use this
 * to highlight latest SDK versions better
 */

import React from "react";
import PropTypes from "prop-types";

export default function LatestSdkVersion({ children }) {
  return children;
}

LatestSdkVersion.propTypes = {
  children: PropTypes.node,
};
