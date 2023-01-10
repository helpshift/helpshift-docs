import React, { useState } from "react";
import Announcement from "./Announcement";

const announcements = [
  {
    date: "10 Nov 2022",
    title: "New dev docs launched!",
    info: `The new developer docs are now available in beta! The older site is still available in case you need to access legacy documentation.`,
    link: "https://old-developers.helpshift.com",
    linkTitle: "old-developers.helpshift.com",
  },
  {
    date: "10 Oct 2022",
    title: "SDK X 10.2.0 released",
    info: `SDK X 10.2.0 is now released for iOS and Android! Upgrade to get the latest features`,
  },
  {
    date: "1 June 2022",
    title: "Feedback+ SDK released",
    info: `Helpshift's first SDK with a free tier to help you get early feedback from your users`,
    link: "/freesdk",
    linkTitle: "Read the guide",
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

  return (
    <section
      className="overflow-y-auto lg:pb-8 dark:bg-none dark:border dark:border-gray-700 dark:border-solid bg-white/40 dark:bg-white/0 backdrop-blur-sm px-4 rounded-xl"
      style={{
        maxHeight: "90vh",
      }}
    >
      <div className="flex justify-between mt-4 mb-4 lg:mt-6 items-center">
        <h2 className="text-lg md:text-2xl mb-0">Announcements</h2>
        <button
          onClick={_handleExpandedClick}
          className="py-2 px-4 rounded-md text-xs bg-transparent text-gray-800 dark:text-gray-100 border border-solid border-gray-700 dark:border-gray-600 shadow cursor-pointer lg:hidden"
        >
          {!expanded ? "Show" : "Hide"}
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
