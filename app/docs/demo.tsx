"use client";
import React from "react";
import { Element } from "react-scroll";

interface DemoProps {
  heading: React.ElementType;
  title: string;
}

const Demo: React.FC<DemoProps> = ({ heading: Heading, title }) => {
  return (
    <Element name="demo">
      <section>
        <Heading>{title}</Heading>
        <p>
          This page is a live demo of the twNextThemer package. The npm
          component is installed in the top-right corner of the page under
          the&nbsp;
          <span className="text-sun">sun</span>
          <span className="text-moon">moon</span>&nbsp;| paintbrush icon button.
          Click the icon to toggle between light and dark modes and to select a
          color theme.
        </p>
      </section>
    </Element>
  );
};

export default Demo;
