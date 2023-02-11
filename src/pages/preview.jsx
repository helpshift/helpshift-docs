/**
 * An experimental, live MDX playground with Helpshift's custom components.
 * Not everything works out-of-the-box, but it's enough to avoid local setup
 * for most common use cases.
 */

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useState, useEffect } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
const variablesData = require("@site/src/data/variables.json");

import BrowserOnly from "@docusaurus/BrowserOnly";
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
  const customSnippets = {
    INFO: `<Admonition type="info" title="Info">

This is an admonition callout.

- You can add bullet points

or

\`\`\`js
console.log("You can add code blocks");
\`\`\`

or anything else really

</Admonition>
    `,
    CAUTION: `<Admonition type="caution" title="Be careful!">

Warn the user about something

</Admonition>
    `,
    DANGER: `<Admonition type="danger" title="Whoa there!">

Something dangerous the user probably should avoid doing

</Admonition>
    `,
    CODE: `\`\`\`swift
Some swift code here
\`\`\`
    `,
    INTRO: `<Intro>

This is an introduction

</Intro>
`,
    IMAGE: `<Image width="half" src="/static/books/freesdk/androidfaqs.png" centered alt="Alternative text" />`,
    CENTERED: `<Centered width="full">

This text will be centered

</Centered>
    `,
    SIDEBYSIDE: `<SideBySide>

    <Centered>
    Text on the left, image on the right
    </Centered>

    <Image width="half" src="/static/books/freesdk/androidfaqs.png" centered alt="Alternative text" />

    </SideBySide>
    `,
    DOWNLOAD_BUTTON: `<DownloadButton
text="Download SDK"
link="[% android.sdk_url %]"
classes="mb-4"
/>`,
    VARIABLE: `[% sdkx_ios.sdk_url %]`,
    TABS: "There is an issue rendering Tab previews. Please check existing docs for examples",
  };

  const mdSnippets = {
    H1: "# This is a heading 1 {#custom-anchor-header}",
    H2: "## This is a heading 2 {#custom-anchor-header}",
    H3: "### This is a heading 3 {#custom-anchor-header}",
    BULLETS: `- Bullet point 1
- Bullet point 2
- Bullet point 3
  - Nested point 1
    `,
    BOLD: `This is some **bold** text`,
    ITALIC: `This is some *italic* text`,
    EXTERNAL_LINK: `[Link title](https://example.com)`,
    INTERNAL_LINK: `[Link title](/sdkx_ios/getting-started)`,
    QUOTE: `> Don't quote me on this`,
  };

  const [textArea, setTextArea] = useState("");
  const [evaluatedTextArea, setEvaluatedTextArea] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function setMarkup() {
      try {
        const textWithoutUnsupportedMarkdown = textArea
          .replace(/\{#(.*)\}/g, "") // remove {# abc}
          .replace(/(<)=/g, "&lt;=") // replace <= with &lt;=
          .replace(/\[%[ ]*(.*)[ ]*%\]/g, (match, p1) => {
            // This allows us to access nested variables using dot operator
            // https://stackoverflow.com/a/43849204
            const value = p1
              .trim()
              .split(".")
              .reduce((p, c) => (p && p[c]) || null, variablesData);

            if (value) {
              // Replace the variable with the actual value
              return value;
            } else {
              // We don't want to crash here because it's possible that the value
              // is in a code block for demonstration purposes
              console.log(`DID NOT FIND ${value}`);
            }
          });

        const { default: MDXContent } = await evaluate(
          textWithoutUnsupportedMarkdown,
          {
            ...runtime,
          }
        );

        const markup = renderToStaticMarkup(
          <MDXContent components={components} />
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
    }

    setMarkup();
  }, [textArea]);

  const appendMDX = (snippet) => {
    if (snippet) {
      setTextArea(textArea + "\n" + snippet + "\n");
    }
  };

  return (
    <BrowserOnly>
      {() => {
        return (
          <div className="mx-4">
            <div className="my-4">
              Experimental live MDX playground
              <p className="text-xs">
                Some aspects of the preview might not work (e.g. header links),
                but this playground should serve the purpose of helping you
                visualize your changes without a local server. Have fun!
              </p>
              <div className="grid grid-flow-col justify-start gap-4">
                <button onClick={() => appendMDX(customSnippets.INFO)}>
                  Info
                </button>
                <button onClick={() => appendMDX(customSnippets.CAUTION)}>
                  Caution
                </button>
                <button onClick={() => appendMDX(customSnippets.DANGER)}>
                  Danger
                </button>
                <button onClick={() => appendMDX(customSnippets.CODE)}>
                  Code
                </button>
                <button onClick={() => appendMDX(customSnippets.INTRO)}>
                  Intro
                </button>
                <button onClick={() => appendMDX(customSnippets.IMAGE)}>
                  Image
                </button>
                <button onClick={() => appendMDX(customSnippets.CENTERED)}>
                  Centered
                </button>
                <button onClick={() => appendMDX(customSnippets.CENTERED)}>
                  Centered
                </button>
                <button onClick={() => appendMDX(customSnippets.SIDEBYSIDE)}>
                  Side by side
                </button>
                <button
                  onClick={() => appendMDX(customSnippets.DOWNLOAD_BUTTON)}
                >
                  Download button
                </button>
                <button onClick={() => appendMDX(customSnippets.VARIABLE)}>
                  Variable
                </button>
                <button onClick={() => appendMDX(customSnippets.TABS)}>
                  Tabs
                </button>
              </div>
              <div className="grid grid-flow-col justify-start gap-4 mt-4">
                <button onClick={() => appendMDX(mdSnippets.H1)}>H1</button>
                <button onClick={() => appendMDX(mdSnippets.H2)}>H2</button>
                <button onClick={() => appendMDX(mdSnippets.H3)}>H3</button>
                <button onClick={() => appendMDX(mdSnippets.BULLETS)}>
                  Bullets
                </button>
                <button onClick={() => appendMDX(mdSnippets.BOLD)}>Bold</button>
                <button onClick={() => appendMDX(mdSnippets.ITALIC)}>
                  Italic
                </button>
                <button onClick={() => appendMDX(mdSnippets.INTERNAL_LINK)}>
                  Internal link
                </button>
                <button onClick={() => appendMDX(mdSnippets.EXTERNAL_LINK)}>
                  External link
                </button>
                <button onClick={() => appendMDX(mdSnippets.QUOTE)}>
                  Quote
                </button>
              </div>
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
                Ensure your MDX is valid.
                <div
                  className="font-mono text-sm z-10"
                  dangerouslySetInnerHTML={{ __html: error }}
                ></div>
              </section>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
}
