"use client";
import React, { useState, useEffect } from "react";
import useCodeSnippets from "../hooks/useCodeSnippets";
import TabSelector from "./tabSelector";
import CodeSection from "./codeSection";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";

const PrismLoader = dynamic(() => import("./prismLoader"), { ssr: false });

interface SetupProps {
  heading: React.ElementType;
  title: string;
}

const Setup: React.FC<SetupProps> = ({ heading: Heading, title }) => {
  const { codeSnippets, error } = useCodeSnippets();
  const [installTab, setInstallTab] = useState({
    installCode: "",
    activeTab: "yarn",
  });

  useEffect(() => {
    if (codeSnippets.yarn) {
      setInstallTab({ installCode: codeSnippets.yarn, activeTab: "yarn" });
    }
  }, [codeSnippets]);

  const handleCommandChange = (newTab: string) => {
    if (newTab in codeSnippets) {
      const installCode = codeSnippets[newTab];
      setInstallTab({
        installCode: installCode
          ? typeof installCode === "string"
            ? installCode
            : installCode.join("\n")
          : "",
        activeTab: newTab,
      });
    }
  };

  if (error) {
    return <div>Failed to load code snippets: {error.message}</div>;
  }

  return (
    <Element name="setup">
      {" "}
      <section>
        <Heading>{title}</Heading>
        <section id="installation" className="mb-6">
          <p className="mb-4">Add twNextThemer to your Next.js project.</p>
          <TabSelector
            currentTab={installTab.activeTab}
            onTabChange={handleCommandChange}
            tabs={["yarn", "npm", "pnpm"]}
          />
          {installTab.installCode && (
            <PrismLoader
              code={installTab.installCode}
              language="bash"
              withExample={false}
            />
          )}
        </section>
        <CodeSection
          id="next-themes"
          title="Wrap your application's entire content area with the ThemeProvider using next-themes (included dependency). This will commonly be inside of your layout.tsx file."
          snippetKey="nextThemes"
          filename="layout.tsx"
          codeSnippets={codeSnippets}
        />
        <CodeSection
          id="tailwind-config"
          title="Adjust your tailwind.config.ts file to include the twNextThemer configuration plugin. This approach uses lodash (included dependency) to merge the plugin with your existing configuration."
          snippetKey="tailwindConfig"
          filename="tailwind.config.ts"
          codeSnippets={codeSnippets}
        />
      </section>
    </Element>
  );
};

export default Setup;
