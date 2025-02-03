/**
 * Loops over a bunch of Item groups and renders them
 */

import React from "react";
import homeSections from "../data/homeSections";
import BookGroup from "./BookGroup";

export default function BookGroupsList() {
  const groups = homeSections;

  return (
    <div>
      {groups.map((group, idx) => {
        return (
          <BookGroup
            group={group}
            key={group.title}
            classes={`${idx > 0 ? "mt-12" : ""}`}
          />
        );
      })}
    </div>
  );
}
