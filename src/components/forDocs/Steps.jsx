/**
 * Displays a bunch of steps. Usually used for showing SDK integration steps
 */

import React from "react";
import PropTypes from "prop-types";

export default function Steps({ title, children }) {
  return (
    <div className="my-8">
      <b>{title}</b>
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6 rounded-md mt-4">
        {children}
      </div>
    </div>
  );
}

Steps.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
