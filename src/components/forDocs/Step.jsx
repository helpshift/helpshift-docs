/**
 * Single step, meant to be consumed by the "Steps" component
 */

import React from "react";
import PropTypes from "prop-types";

export default function Step({
  number,
  newTab = false,
  title,
  subtitle,
  link,
}) {
  return (
    <div className="col-span-4 border border-solid border-gray-200 dark:border-gray-600 rounded-md shadow-md p-4">
      <h3 className="text-2xl dark:text-gray-300 tracking-widest font-mono mb-0">
        #{number}
      </h3>
      {link && title ? (
        <a target={newTab ? "_blank" : null} href={link} rel="noreferrer">
          {title}
        </a>
      ) : (
        title
      )}
      <p className="text-xs mb-0">{subtitle}</p>
    </div>
  );
}

Step.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  newTab: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
};
