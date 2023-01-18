/**
 * Generic component, used to group a bunch of "items" and render them in a grid
 */

import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { bookShape } from "../constants/propTypes";

export default function BookGroup({ group, classes }) {
  return (
    <section className={classes}>
      <h2 className="text-lg md:text-2xl mb-0">{group.title}</h2>
      <p className="text-sm mb-0">{group.info}</p>
      <ul className="grid grid-cols-6 md:grid-cols-12 list-none text-left pl-0 text-base gap-6 mt-4">
        {group.sdkList
          .filter((sdk) => !sdk.hide)
          .map((sdk) => {
            return <Book book={sdk} key={sdk.title} />;
          })}
      </ul>
    </section>
  );
}

BookGroup.propTypes = {
  group: bookShape,
  classes: PropTypes.string,
};
