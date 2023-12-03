import Head from "next/head";
import profilePicture from "./images/profilePicture.jpeg";
import Image from "next/image";
import { Card } from "../components/Card";
import cultureAmpLogo from "./images/CultureAmpLogo.png";
import myobLogo from "./images/MyobLogo.png";
import elabor8Logo from "./images/Elabor8Logo.png";
import metcashLogo from "./images/MetcashLogo.png";

export default function Home() {
  const cardDetails = [
    {
      heading: "Developer",
      details: [
        "User focused, full stack development",
        "Legacy app, green fields, features, bugs, maintenance",
        "Australian & global SAAS products",
        "Start up, scale up and enterprise",
        "React, Typescript, Next.js, TailwindCSS, Ruby on Rails",
        "AWS, Buildkite, DataDog, Splunk",
        "React Testing Library, Storybook, Chromatic, Jest, Rspec",
      ],
    },
    {
      heading: "Product management",
      details: [
        "Customer interviews, User journeys",
        "Prioritisation, backlog management",
        "Working across teams",
      ],
    },
    {
      heading: "Software delivery",
      details: [
        "Team engagement, performance reviews, goal setting",
        "You build it, You run it",
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Rachel Harris Career Profile</title>
        <meta name="description" content="Rachel Harris Career Profile" />
      </Head>

      <main className="grid grid-cols-3 grid-row-2 gap-8 m-16">
        <div className="col-span-2 bg-white/[.7] rounded p-16 shadow-lg flex gap-16">
          <Image
            src={profilePicture}
            alt="Profile photo of Rachel"
            className="rounded-full"
          />
          <div className="flex flex-row">
            <div className="w-4/5">
              <h1 className="font-sans text-[#cb58e0] text-4xl font-semibold">
                Rachel Harris
              </h1>
              <h3 className="font-sans text-black text-xl font-semibold">
                Software developer
              </h3>
              <p>Perth/Remote</p>
              <button>Contact me</button>
            </div>

            <ul className="flex flex-col justify-evenly w-1/5">
              <li className="shrink aspect-square">
                <Image src={cultureAmpLogo} alt="Culture Amp logo" />
              </li>
              <li className="aspect-square">
                <Image src={myobLogo} alt="Culture Amp logo" />
              </li>
              <li className="aspect-square">
                <Image src={elabor8Logo} alt="Culture Amp logo" />
              </li>
              <li className="aspect-square">
                <Image src={metcashLogo} alt="Culture Amp logo" />
              </li>
            </ul>
          </div>
        </div>

        <Card
          styleOverride="row-span-2"
          heading={cardDetails[0].heading}
          details={cardDetails[0].details}
        />
        <Card
          heading={cardDetails[1].heading}
          details={cardDetails[1].details}
        />
        <Card
          heading={cardDetails[2].heading}
          details={cardDetails[2].details}
        />
      </main>

      <footer className="flex justify-center">
        <span>Created by Rachel Harris, 2023</span>
      </footer>
    </div>
  );
}
