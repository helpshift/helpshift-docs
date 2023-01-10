import React from "react";
import PropTypes from "prop-types";

export default function Announcement({ announcement }) {
  const { date, title, info, link, linkTitle } = announcement;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 md:col-span-6">
      <div>
        <p className="text-xs mb-0">{date}</p>
        <p className="font-semibold mb-0">{title}</p>
        <p className="text-sm mb-2">{info}</p>
        <a className="text-sm" href={link} target="_blank" rel="noreferrer">
          {linkTitle}
        </a>
      </div>
    </div>
  );
}

Announcement.propTypes = {
  announcement: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkTitle: PropTypes.string,
  }),
};
