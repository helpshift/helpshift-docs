/**
 * If you are using any images or icons that require attribution, please add them here
 */

import React from "react";
import Layout from "@theme/Layout";

const icons = [
  {
    name: "android.png",
    link: "https://www.flaticon.com/free-icons/android",
    linkTitle: "android icons",
    text: "Android icons created by pictogramer - Flaticon",
  },
  {
    name: "apple.png",
    link: "https://www.flaticon.com/free-icons/logo",
    linkTitle: "logo icons",
    text: "Logo icons created by pictogramer - Flaticon",
  },
  {
    name: "chat.png",
    link: "https://www.flaticon.com/free-icons/conversation",
    linkTitle: "conversation icons",
    text: "Conversation icons created by Pixel perfect - Flaticon",
  },
  {
    name: "star.png",
    link: "https://www.flaticon.com/free-icons/star",
    linkTitle: "star icons",
    text: "Star icons created by Freepik - Flaticon",
  },
  {
    name: "salesforce.png",
    link: "https://www.flaticon.com/free-icons/salesforce",
    linkTitle: "salesforce icons",
    text: "Salesforce icons created by Freepik - Flaticon",
  },
  {
    name: "email.png",
    link: "https://www.flaticon.com/free-icons/email",
    linkTitle: "email icons",
    text: "Email icons created by Freepik - Flaticon",
  },
  {
    name: "discord.png",
    link: "https://www.flaticon.com/free-icons/discord",
    linkTitle: "discord icons",
    text: "Discord icons created by Freepik - Flaticon",
  },
  {
    name: "messenger.png",
    link: "https://www.flaticon.com/free-icons/brands-and-logotypes",
    linkTitle: "brands and logotypes icons",
    text: "Brands and logotypes icons created by kerismaker - Flaticon",
  },
  {
    name: "plug.png",
    link: "https://www.flaticon.com/free-icons/plug",
    linkTitle: "plug icons",
    text: "Plug icons created by Freepik - Flaticon",
  },
  {
    name: "sdk.png",
    link: "https://www.flaticon.com/free-icons/sdk",
    linkTitle: "sdk icons",
    text: "Sdk icons created by Freepik - Flaticon",
  },
  {
    name: "box.png",
    link: "https://www.flaticon.com/free-icons/box",
    linkTitle: "box icons",
    text: "Box icons created by ibrandify - Flaticon",
  },
  {
    name: "bot.png",
    link: "https://www.flaticon.com/free-icons/bot",
    linkTitle: "bot icons",
    text: "Bot icons created by Smashicons - Flaticon",
  },
  {
    name: "whatsapp.png",
    link: "https://www.flaticon.com/free-icons/whatsapp",
    linkTitle: "whatsapp icons",
    text: "Whatsapp icons created by Freepik - Flaticon",
  },
  {
    name: "confetti.png",
    link: "https://www.flaticon.com/free-icons/party",
    linkTitle: "party icons",
    text: "Party icons created by pongsakornRed - Flaticon",
  },
  {
    name: "pipe.png",
    link: "https://www.flaticon.com/free-icons/pipe",
    linkTitle: "pipe icons",
    text: "Pipe icons created by srip - Flaticon",
  },
  {
    name: "sand-clock.png",
    link: "https://www.flaticon.com/free-icons/clock",
    linkTitle: "clock icons",
    text: "Clock icons created by Uniconlabs - Flaticon",
  },
  {
    name: "react.png",
    link: "https://icons8.com/icon/35989/react-native",
    linkTitle: "react icons",
    text: "React Native icon by Icons8",
  },
  {
    name: "unity.png",
    link: "https://icons8.com/icon/39848/unity",
    linkTitle: "unity icons",
    text: "Unity icon by Icons8",
  },
  {
    name: "unreal.png",
    link: "https://icons8.com/icon/26027/unreal-engine",
    linkTitle: "unreal icons",
    text: "Unreal Engine icon by Icons8",
  },
  {
    name: "xamarin.png",
    link: "https://icons8.com/icon/24558/xamarin",
    linkTitle: "xamarin icons",
    text: "Xamarin icon by Icons8",
  },
];

export default function CreditsPage() {
  return (
    <Layout
      title="Credits"
      description="Credits and attributions to content used throughout the website"
    >
      <div className="py-16">
        <div className="mx-6 md:mx-8 xl:mx-20">
          <h2>Icons</h2>
          {icons.map((icon) => {
            return (
              <p key={icon.name} className="mb-2">
                {icon.name} -{" "}
                <a href={icon.link} title={icon.linkTitle}>
                  {icon.text}
                </a>
              </p>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
