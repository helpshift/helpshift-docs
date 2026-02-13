/**
 * Used in the sidebar or collapsible accordion on the homepage to show announcements.
 */

import React, { useState } from "react";
import Announcement from "./Announcement";
import Translate, { translate } from "@docusaurus/Translate";

const announcements = [
  {
    date: "03 Dec 2025",
    title: "SDK X Android 10.5.0 released",
    info: `SDK X Android 10.5.0 is now released! Upgrade to get the latest features`,
    link: "/sdkx_android",
    linkTitle: "SDK X Android 10.5.0",
  },
  {
    date: "03 Dec 2025",
    title: "SDK X iOS 10.5.0 released",
    info: `SDK X iOS 10.5.0 is now released! Upgrade to get the latest features`,
    link: "/sdkx_ios",
    linkTitle: "SDK X iOS 10.5.0",
  },
  {
    date: "29 Apr 2025",
    title: "SDK X React-Native native 10.4.0 released",
    info: `SDK X React-Native 10.4.0 is now released for iOS and Android! Upgrade to get the latest features`,
    link: "/sdkx-react-native",
    linkTitle: "SDK X React-Native 10.4.0",
  },
  {
    date: "10 Mar 2025",
    title: "SDK X Unreal 10.4.0 released",
    info: `SDK X Unreal 10.4.0 is now released for iOS and Android! Upgrade to get the latest features`,
    link: "/sdkx-unreal",
    linkTitle: "SDK X Unreal 10.4.0",
  },
  {
    date: "11 Feb 2025",
    title: "SDK X Unity 10.4.0 released",
    info: `SDK X Unity 10.4.0 is now released for iOS and Android! Upgrade to get the latest features`,
    link: "/sdkx-unity",
    linkTitle: "SDK X Unity 10.4.0",
  },
  {
    date: "27 Nov 2024",
    title: "SDK X Android 10.4.0 released",
    info: `SDK X Android 10.4.0 is now released! Upgrade to get the latest features`,
    link: "/sdkx_android",
    linkTitle: "SDK X Android 10.4.0",
  },
  {
    date: "27 Nov 2024",
    title: "SDK X iOS 10.4.0 released",
    info: `SDK X iOS 10.4.0 is now released! Upgrade to get the latest features`,
    link: "/sdkx_ios",
    linkTitle: "SDK X iOS 10.4.0",
  },
  {
    date: "4 March 2024",
    title: "SDK X React-Native 10.3.1 released",
    info: `SDK X React-Native 10.3.1 is now released for iOS and Android! Upgrade to get the latest features`,
    link: "/sdkx-react-native",
    linkTitle: "SDK X React-Native 10.3.1",
  },
  {
    date: "25 Jan 2024",
    title: "SDK X Unreal 10.3.0 released",
    info: `SDK X Unreal 10.3.0 is now released for iOS and Android! Upgrade to get the latest features`,
    link: "/sdkx-unreal",
    linkTitle: "SDK X Unreal 10.3.0",
  },
  {
    date: "27 Nov 2023",
    title: "SDK X Unity 10.3.0 released",
    info: `SDK X Unity 10.3.0 is now released for iOS and Android! Upgrade to get the latest features`,
    link: "/sdkx-unity",
    linkTitle: "SDK X Unity 10.3.0",
  },
  {
    date: "31 Oct 2023",
    title: "SDK X 10.3.0 released",
    info: `SDK X 10.3.0 is now released for iOS and Android! Upgrade to get the latest features`,
  },
  {
    date: "10 Nov 2022",
    title: "New dev docs launched!",
    info: `The new developer docs are now available in beta! The older site is still available in case you need to access legacy documentation.`,
    link: "https://old-developers.helpshift.com",
    linkTitle: translate({ message: "old-developers.helpshift.com" }),
  },
  {
    date: translate({ message: "10 Oct 2022" }),
    title: translate({ message: "SDK X 10.2.0 released" }),
    info: translate({
      message: `SDK X 10.2.0 is now released for iOS and Android! Upgrade to get the latest features`,
    }),
  },
];

export default function AnnouncementList() {
  const [expanded, setExpanded] = useState(false);

  const _handleExpandedClick = () => {
    setExpanded(!expanded);
  };

  if (!announcements.length) {
    return null;
  }

  const expandButtonText = !expanded ? "Show" : "Hide";

  return (
    <section
      className="overflow-y-auto lg:pb-8 dark:bg-none dark:border dark:border-gray-700 dark:border-solid bg-white/40 dark:bg-white/0 backdrop-blur-sm px-4 rounded-xl"
      style={{
        maxHeight: "90vh",
      }}
    >
      <div className="flex justify-between mt-4 mb-4 lg:mt-6 items-center">
        <h2 className="text-lg md:text-2xl mb-0">
          <Translate>Announcements</Translate>
        </h2>
        <button
          onClick={_handleExpandedClick}
          className="py-2 px-4 rounded-md text-xs bg-transparent text-gray-800 dark:text-gray-100 border border-solid border-gray-700 dark:border-gray-600 shadow cursor-pointer lg:hidden"
        >
          {expandButtonText}
        </button>
      </div>
      <div className={`${expanded ? "block" : "hidden lg:block"}`}>
        <div className="md:grid md:grid-cols-12 lg:block gap-8">
          {announcements.map((item) => {
            return <Announcement announcement={item} key={item.title} />;
          })}
        </div>
      </div>
    </section>
  );
}
