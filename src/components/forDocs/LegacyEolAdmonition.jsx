/**
 * For easily displaying the end-of-life notice on Legacy SDK
 */

import React from "react";
import { Admonition } from "@site/src/components/forDocs";

export default function SideBySide() {
  return (
    <Admonition type="danger" title="Important">
      Helpshift’s Legacy SDKs (SDK Version &lt;=7.x.x) reached their end of life
      on 31 Dec 2022, and end of support on 31 March 2023. Please upgrade to the{" "}
      <a
        href="https://developers.helpshift.com"
        target="_blank"
        rel="noreferrer"
      >
        Latest SDK
      </a>{" "}
      if you haven&apos;t already.
    </Admonition>
  );
}
