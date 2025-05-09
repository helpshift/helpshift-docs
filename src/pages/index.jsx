import React from "react";
import Layout from "@theme/Layout";
import AnnouncementList from "../components/AnnouncementList";
import BookGroupsList from "../components/BookGroupsList";
import Translate from "@docusaurus/Translate";

export default function Homepage() {
  return (
    <Layout
      title="All Guides"
      description="Guides and references to help you integrate the Helpshift SDK into your app"
    >
      <div className="full-bg relative z-20 h-full">
        <div className="py-16 pb-4 md:py-24 md:pb-12 max-w-full text-left dark:from-zinc-900 dark:to-zinc-900">
          <div className="mx-4 md:mx-8 xl:mx-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none font-normal dark:text-white mb-2">
              <Translate>Developer Guide</Translate>
            </h1>
            <p className="text-base md:text-xl dark:text-gray-200">
              <Translate>
                Easily integrate the Helpshift SDK into your app or website
              </Translate>
            </p>
          </div>
        </div>

        <div className="pb-8">
          <div className="block lg:hidden mx-4 md:mx-6 xl:mx-20 mb-8">
            <AnnouncementList />
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-8 mx-4 md:mx-6 xl:mx-20">
            <div className="col-span-12 lg:col-span-9 dark:border dark:border-gray-700 dark:border-solid p-4 lg:p-6 lg:pl-8 rounded-xl bg-white/60 backdrop-blur-sm dark:bg-white/0">
              <BookGroupsList />
            </div>
            <div className="hidden lg:block col-span-3">
              <AnnouncementList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
