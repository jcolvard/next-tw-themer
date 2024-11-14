"use client";
import { BoltIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Element } from "react-scroll";

interface FeaturesProps {
  heading: React.ElementType;
  title: string;
}

const Features: React.FC<FeaturesProps> = ({ heading: Heading, title }) => {
  return (
    <Element name="features">
      <section>
        <Heading>{title}</Heading>

        <ul className="px-5">
          <li className="mb-3 flex items-start">
            <BoltIcon className="duration-900 mr-2 mt-1.5 h-3 w-3 flex-shrink-0 text-secondary transition-all ease-in-out" />
            Enables your users to define a color scheme for your app
          </li>
          <li className="mb-3 flex items-start">
            <BoltIcon className="duration-900 mr-2 mt-1.5 h-3 w-3 flex-shrink-0 text-secondary transition-all ease-in-out" />
            Users can select a recurring color theme to be applied on return
            visits using the browser's&nbsp;
            <code className="token attr-name language-text"> localStorage</code>
          </li>
          <li className="mb-3 flex items-start">
            <BoltIcon className="duration-900 mr-2 mt-1.5 h-3 w-3 flex-shrink-0 text-secondary transition-all ease-in-out" />
            Or, they can set the color theme to `Random` and enjoy a new,
            randomly picked color on each site visit, or on browser refresh
          </li>
          <li className="mb-3 flex items-start">
            <BoltIcon className="duration-900 mr-2 mt-1.5 h-3 w-3 flex-shrink-0 text-secondary transition-all ease-in-out" />
            Includes a dark/light/system mode toggle with the&nbsp;
            <a
              className="duration-900 text-primary transition-all ease-in-out hover:text-secondary"
              href="https://github.com/pacocoursey/next-themes#readme"
            >
              next-themes
            </a>
            &nbsp;package.
          </li>
          <li className="mb-3 flex items-start">
            <BoltIcon className="duration-900 mr-2 mt-1.5 h-3 w-3 flex-shrink-0 text-secondary transition-all ease-in-out" />
            Default Tailwind color palette automatically adjusts when switching
            between light and dark modes to protect contrast ratios and ensure
            accessibility
          </li>
          {/* <li className="mb-3 flex items-start">
          <BoltIcon className="mr-2 mt-1.5 h-3 w-3 flex-shrink-0 text-secondary transition-all ease-in-out duration-900" />
          If a secleted color theme is outside of the spectrum when a user
          switches from light to dark mode, the component will default to the
          closest tint or shade within the color and spectrum of the selected
          mode
        </li> */}
        </ul>
      </section>
    </Element>
  );
};

export default Features;
