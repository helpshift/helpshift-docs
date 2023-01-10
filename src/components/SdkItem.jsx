import React from "react";
import Link from "@docusaurus/Link";
import { sdkShape } from "../constants/propTypes";

export default function SdkItem({ sdk }) {
  const { link, color, image, title, description } = sdk;
  return (
    <li className="col-span-6">
      <Link
        to={link}
        className="md:w-11/12 hover:no-underline text-slate-700 dark:text-gray-100 hover:text-sky-700 text-base font-normal rounded-lg flex hover:shadow transition-shadow justify-start flex-grow duration-150 h-full bg-white dark:bg-gray-800 gap-1"
      >
        <div className="basis-16 md:basis-20">
          <img
            className={`w-full h-full lg:p-4 p-3 rounded-l-lg bg-gradient-to-b ${color}`}
            src={image}
            alt={`Logo for ${title}`}
          />
        </div>
        <div className="mt-1 p-2 basis-full">
          <p
            to={link}
            className="tracking-wide font-semibold text-base mb-0 text-gray-900 dark:text-gray-100"
          >
            {title}
          </p>
          <p
            className="mb-0 text-zinc-900 dark:text-gray-300 text-sm"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></p>
        </div>
      </Link>
    </li>
  );
}

SdkItem.propTypes = sdkShape.isRequired;
