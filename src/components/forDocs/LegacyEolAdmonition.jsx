/**
 * For easily displaying the end-of-life notice on Legacy SDK
 */

import React from "react";
import { Admonition } from "@site/src/components/forDocs";

export default function SideBySide() {
  return (
    <Admonition type="danger" title="Important">
      Helpshift’s Legacy SDKs (SDK Version &lt;=7.x.x) will see end of life as
      of 31 Dec 2022 and end of support as of 31 March 2023.
    </Admonition>
  );
}
