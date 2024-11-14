"use client";
import React from "react";
import { Element } from "react-scroll";

interface ExamplesProps {
  heading: React.ElementType;
  title: string;
}

const Examples: React.FC<ExamplesProps> = ({ heading: Heading, title }) => {
  return (
    <Element name="examples">
      <section>
        <Heading>{title}</Heading>
      </section>
    </Element>
  );
};

export default Examples;
