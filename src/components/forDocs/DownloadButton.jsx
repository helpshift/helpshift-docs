/**
 * Shows a button inside an anchor tag for downloading a particular SDK
 */

import React from "react";
import PropTypes from "prop-types";
import { translate } from "@docusaurus/Translate";

export default function DownloadButton({ link, text, classes }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button
        className={`px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:shadow-md hover:cursor-pointer border-none ${
          classes ? classes : ""
        }`}
      >
        {text || translate({ message: "Download SDK" })}
      </button>
    </a>
  );
}

DownloadButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};
