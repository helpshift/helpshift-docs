/**
 * Used to set the context for each docs page
 */

import React from "react";
import PropTypes from "prop-types";

export default function Intro({ children }) {
  return (
    <div className="text-2xl text-gray-600 dark:text-gray-400">{children}</div>
  );
}

Intro.propTypes = {
  children: PropTypes.node,
};
