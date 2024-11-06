"use client";
import React from "react";
import { Element } from "react-scroll";

interface LicenseProps {
  heading: React.ElementType;
  title: string;
}

const License: React.FC<LicenseProps> = ({ heading: Heading, title }) => {
  return (
    <Element name="license">
      <section>
        <Heading>{title}</Heading>
        <p>
          <a
            href="#"
            className="duration-900 text-primary underline decoration-1 underline-offset-2 transition-all ease-in-out hover:text-secondary"
          >
            MIT License
          </a>
        </p>
      </section>
    </Element>
  );
};

export default License;
