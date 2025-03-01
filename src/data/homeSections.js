import { translate } from "@docusaurus/Translate";

export default [
  {
    title: translate({ message: "Latest SDKs" }),
    tag: {
      title: translate({ message: "New" }),
      colorClasses: "bg-green-500 text-white",
    },
    img: "/img/star.png",
    color: "from-amber-500 to-amber-700",
    sdkList: [
      {
        title: translate({ message: "SDK X - Android" }),
        image: "/img/android.png",
        alt: translate({ message: "Android logo" }),
        link: "/sdkx_android",
        description: translate({
          message: "Java APIs to integrate Helpshift into your Android app",
        }),
        color: "from-green-500 to-green-600",
      },
      {
        title: translate({ message: "SDK X - iOS" }),
        image: "/img/apple.png",
        alt: translate({ message: "iOS logo" }),
        link: "/sdkx_ios",
        description: translate({
          message:
            "Objective-C and Swift APIs to integrate Helpshift into your app",
        }),
        color: "from-slate-600 to-slate-800",
      },
      {
        title: translate({ message: "SDK X - Unity" }),
        image: "/img/unity.png",
        link: "/sdkx-unity",
        alt: translate({ message: "Unity logo" }),
        description: translate({
          message: "With iOS and Android-specific APIs",
        }),
        color: "from-fuchsia-600 to-fuchsia-800",
      },
      {
        title: translate({ message: "SDK X - React Native" }),
        image: "/img/react.png",
        link: "/sdkx-react-native",
        alt: translate({ message: "React logo" }),
        description: translate({
          message: "With iOS and Android-specific APIs",
        }),
        color: "from-cyan-500 to-cyan-700",
      },
      {
        title: translate({ message: "SDK X - Unreal Engine" }),
        image: "/img/unreal.png",
        link: "/sdkx-unreal",
        alt: translate({ message: "Unreal Engine logo" }),
        description: translate({
          message: "With iOS and Android-specific APIs",
        }),
        color: "from-cyan-500 to-cyan-700",
      },
      {
        title: translate({ message: "SDK X - Xamarin" }),
        image: "/img/xamarin.png",
        link: "/sdkx-xamarin",
        alt: translate({ message: "Xamarin logo" }),
        description: translate({
          message: "With iOS and Android-specific APIs",
        }),
        color: "from-slate-600 to-slate-800",
      },
      {
        title: translate({ message: "SDK X - Cocos2dx" }),
        image: "/img/cocos.png",
        link: "/sdkx-cocos2dx",
        alt: translate({ message: "Cocos logo" }),
        description: translate({
          message: "With iOS and Android-specific APIs",
        }),
        color: "from-slate-600 to-slate-800",
      },
      {
        title: translate({ message: "Web Chat" }),
        image: "/img/chat.png",
        alt: translate({ message: "Chat icon" }),
        link: "/web-chat",
        tag: {
          title: translate({ message: "Featured" }),
          colorClasses: "bg-blue-500 text-white",
        },
        description: translate({
          message:
            "Simple JavaScript API for integrating chat on your websites",
        }),
        color: "from-purple-600 to-purple-800",
      },
      {
        title: translate({ message: "PC and Console" }),
        image: "/img/pc-console.png",
        link: "/pc-and-console",
        alt: translate({ message: "pc-console" }),
        description: translate({
          message:
            "Run Helpshift smoothly with PC and Console apps/games using Webview or QR Code Integration",
        }),
        color: "from-cyan-500 to-cyan-700",
      },
    ],
  },
  {
    title: translate({ message: "Channels & Integrations" }),
    img: "/img/pipe.png",
    color: "from-blue-500 to-blue-700",
    sdkList: [
      {
        title: translate({ message: "Salesforce" }),
        image: "/img/salesforce.png",
        alt: translate({ message: "Salesforce logo" }),
        link: "/salesforce",
        tag: {
          title: translate({ message: "Featured" }),
          colorClasses: "bg-blue-500 text-white",
        },
        description: translate({
          message: "Integrate Helpshift seamlessly with Salesforce",
        }),
        color: "from-sky-500 to-sky-700",
      },
      {
        title: translate({ message: "Email support" }),
        image: "/img/email.png",
        alt: translate({ message: "Email icon" }),
        link: "/email-support",
        description: translate({
          message: "Refer to the Helpshift docs for Email support",
        }),
        color: "from-teal-500 to-teal-700",
      },
      {
        title: translate({ message: "Discord" }),
        image: "/img/discord.png",
        alt: translate({ message: "Discord logo" }),
        tag: {
          title: translate({ message: "Hot" }),
          colorClasses: "bg-orange-500 text-white",
        },
        description: translate({
          message: "Integrate Helpshift and Discord seamlessly",
        }),
        color: "from-indigo-500 to-indigo-700",
        hide: true,
      },
      {
        title: translate({ message: "Facebook Messenger" }),
        image: "/img/messenger.png",
        alt: translate({ message: "Messenger logo" }),
        description: "Integrate Helpshift and Facebook Messenger seamlessly",
        color: "from-blue-500 to-blue-700",
        hide: true,
      },
      {
        title: translate({ message: "WhatsApp" }),
        image: "/img/whatsapp.png",
        alt: translate({ message: "WhatsApp logo" }),
        description: translate({
          message: "Integrate Helpshift and WhatsApp seamlessly",
        }),
        color: "from-green-500 to-green-600",
        hide: true,
      },
    ],
  },
  {
    title: translate({ message: "APIs" }),
    img: "/img/plug.png",
    color: "from-purple-500 to-purple-700",
    sdkList: [
      {
        title: translate({ message: "REST API" }),
        image: "/img/plug.png",
        link: "/rest-api",
        alt: translate({ message: "Plug connecting logo" }),
        description: translate({
          message: "Refer to the Helpshift docs for our REST API",
        }),
        color: "from-yellow-500 to-yellow-600",
      },
      {
        title: translate({ message: "Custom Bots API" }),
        image: "/img/bot.png",
        link: "/custom-bots-api",
        alt: translate({ message: "Bot logo" }),
        description: translate({
          message: "Refer to the Helpshift docs for working with custom bots",
        }),
        color: "from-gray-700 to-gray-800",
      },
    ],
  },
  {
    title: translate({ message: "Legacy Mobile SDKs" }),
    tag: {
      title: translate({ message: "Deprecated" }),
      colorClasses: "bg-red-500 text-white",
    },
    info: "Helpshift's Legacy SDKs (SDK Version <= 7.x.x) reached their end of life on 31 Dec 2022, and end of support on 31 March 2023. Please upgrade to the Latest SDKs if you haven't already.",
    img: "/img/sand-clock.png",
    color: "from-slate-500 to-gray-800",
    sdkList: [
      {
        title: translate({ message: "Legacy Android" }),
        image: "/img/android.png",
        link: "/android",
        alt: translate({ message: "Android logo" }),
        description: translate({
          message: "Refer to the Helpshift Legacy SDK for Android",
        }),
        color: "from-green-500 to-green-600",
      },
      {
        title: translate({ message: "Legacy iOS" }),
        image: "/img/apple.png",
        link: "/ios",
        alt: translate({ message: "iOS logo" }),
        description: translate({
          message: "Refer to the Helpshift Legacy SDK for iOS",
        }),
        color: "from-slate-600 to-slate-800",
      },
      {
        title: translate({ message: "Legacy Unity" }),
        image: "/img/unity.png",
        link: "/unity",
        alt: translate({ message: "Unity logo" }),
        description: translate({
          message: "Refer to the Helpshift Legacy SDK for Unity",
        }),
        color: "from-fuchsia-600 to-fuchsia-800",
      },
      {
        title: translate({ message: "Legacy Cocos2d-x" }),
        image: "/img/box.png",
        link: "/cocos2d-x",
        alt: translate({ message: "Box" }),
        description: translate({
          message: "Refer to the Helpshift Legacy SDK for Cocos2d-x",
        }),
        color: "from-sky-500 to-sky-700",
      },
      {
        title: translate({ message: "Legacy Xamarin" }),
        image: "/img/xamarin.png",
        link: "/xamarin",
        alt: translate({ message: "Xamarin logo" }),
        description: translate({
          message: "Refer to the Helpshift Legacy SDK for Xamarin",
        }),
        color: "from-slate-500 to-slate-700",
      },
    ],
  },
];
