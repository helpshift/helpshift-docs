/**
 * Show tag or label on the book
 */

import React from "react";
import PropTypes from "prop-types";

export default function Label({ tag }) {
  if (!tag) {
    return null;
  }

  const { title, colorClasses } = tag;

  return (
    <span
      className={`text-xs font-semibold ml-2 mb-0.5 py-1 px-2 uppercase rounded ${colorClasses}`}
    >
      {title}
    </span>
  );
}

Label.PropTypes = {
  tag: PropTypes.object,
};
