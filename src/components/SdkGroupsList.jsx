/**
 * Loops over a bunch of Item groups and renders them
 */

import React from "react";
import homeSections from "../data/homeSections.json";
import SdkGroup from "./SdkGroup";

export default function SdkGroupsList() {
  const groups = homeSections;

  return (
    <div>
      {groups.map((group, idx) => {
        return (
          <SdkGroup
            group={group}
            key={group.title}
            classes={`${idx > 0 ? "mt-12" : ""}`}
          />
        );
      })}
    </div>
  );
}
