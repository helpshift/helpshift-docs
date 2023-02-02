/**
 * An experimental, live MDX playground with Helpshift's custom components.
 * Not everything works out-of-the-box, but it's enough to avoid local setup
 * for most common use cases.
 */

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useState, useEffect } from "react";
import MDX from "@mdx-js/runtime";
import {
  Admonition,
  CodeBlock,
  Tabs,
  TabItem,
  LatestSdkVersion,
  Centered,
  Image,
  Intro,
  SideBySide,
  DownloadButton,
  Steps,
  Step,
} from "@site/src/components/forDocs";

const components = {
  Admonition,
  CodeBlock,
  Tabs,
  TabItem,
  LatestSdkVersion,
  Centered,
  Image,
  Intro,
  SideBySide,
  DownloadButton,
  Steps,
  Step,
};

export default function Preview() {
  const [textArea, setTextArea] = useState("");
  const [evaluatedTextArea, setEvaluatedTextArea] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const markup = renderToStaticMarkup(
        <MDX components={components}>{textArea}</MDX>
      );
      setEvaluatedTextArea(markup);
      setError(false);
    } catch (e) {
      const errorMarkup = renderToStaticMarkup(
        <div>
          <h1 className="text-lg">{e.name}</h1>
          <p>{e.message}</p>
        </div>
      );
      setError(errorMarkup);
    }
  }, [textArea]);

  return (
    <div className="mx-4">
      <div className="my-4">
        Experimental live MDX playground
        <p className="text-xs">
          Some aspects of the preview might not work (e.g. header links), but
          this playground should serve the purpose of helping you visualize your
          changes without a local server. Have fun!
        </p>
      </div>
      <div className="grid grid-cols-7">
        <textarea
          className="max-h-full overflow-y-auto min-h-full h-screen col-span-3 p-2 z-10"
          name=""
          id=""
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>

        <article
          className="theme-doc-markdown markdown max-w-4xl w-full mx-auto max-h-full overflow-y-auto h-screen col-span-4 px-4"
          dangerouslySetInnerHTML={{ __html: evaluatedTextArea }}
        ></article>
      </div>

      <div
        className={`grid grid-cols-7 absolute top-0 left-0 w-screen h-screen ${
          error ? "visible" : "invisible"
        }`}
      >
        <div className="col-span-3"></div>
        <section className="col-span-4 bg-black bg-opacity-70 text-gray-100 p-4">
          Ensure your HTML is valid
          <div
            className="font-mono text-sm z-10"
            dangerouslySetInnerHTML={{ __html: error }}
          ></div>
        </section>
      </div>
    </div>
  );
}
