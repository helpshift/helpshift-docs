/**
 * For easily displaying the end-of-life notice on Legacy SDK
 */

import React, { useEffect, useState } from "react";
import { Admonition } from "@site/src/components/forDocs";

export default function LegacyEolAdmonition() {
  const [newBookLink, setNewBookLink] = useState("");

  const legacyToNewBookPaths = {
    android: { path: "/sdkx_android" },
    ios: { path: "/sdkx_ios" },
    unity: { androidPath: "/sdkx-unity/android", iosPath: "/sdkx-unity/ios" },
    "cocos2d-x": { path: "" },
    xamarin: { path: "" },
  };

  /**
   * Returns the new book URL based on the old book's path
   * @param {Object} bookInfo - Contains path info for the latest SDK book
   * @returns {String} The URL to suggest the user to go to
   */
  const getNewBookLink = (bookInfo) => {
    const { path, androidPath, iosPath } = bookInfo;

    const baseUrl = location.origin;
    const legacyBookPage = location?.pathname?.split("/")[2];

    // Plugins usually have Android and iOS docs in a flat
    // hierarchy in the file system, so we need to check for page suffix
    const legacyBookPageIsAndroid = legacyBookPage?.includes("android");
    const legacyBookPageIsIos = legacyBookPage?.includes("ios");

    if (bookInfo) {
      if (path) {
        return `${baseUrl}${path}`;
      }

      if (legacyBookPageIsAndroid && androidPath) {
        return `${baseUrl}${androidPath}`;
      }

      if (iosPath && legacyBookPageIsIos) {
        return `${baseUrl}${iosPath}`;
      }
    }

    return baseUrl;
  };

  useEffect(() => {
    const legacyBookPath = location?.pathname?.split("/")[1];

    if (legacyBookPath) {
      const newBookInfo = legacyToNewBookPaths[legacyBookPath];
      setNewBookLink(getNewBookLink(newBookInfo));
    }
  }, []);

  return (
    <Admonition type="danger" title="Important">
      Helpshift’s Legacy SDKs (SDK Version &lt;=7.x.x) reached their end of life
      on 31 Dec 2022, and end of support on 31 March 2023. Please upgrade to the{" "}
      <a href={newBookLink} target="_blank" rel="noreferrer">
        Latest SDK
      </a>{" "}
      if you haven&apos;t already.
    </Admonition>
  );
}
