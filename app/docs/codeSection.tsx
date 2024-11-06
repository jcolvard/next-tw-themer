"use client";
import React from "react";
import PrismLoader from "./prismLoader";

interface CodeSnippets {
  [key: string]: string | string[]; // Allow both string and string[] types
}

interface CodeSectionProps {
  id: string;
  title: string;
  snippetKey: string;
  filename: string;
  codeSnippets: CodeSnippets;
  example?: React.ReactNode;
}

const CodeSection: React.FC<CodeSectionProps> = ({
  id,
  title,
  snippetKey,
  filename,
  codeSnippets,
  example,
}) => {
  const snippet = codeSnippets[snippetKey];
  const code = Array.isArray(snippet) ? snippet.join("\n") : snippet; // Handle both string and string[]

  return (
    <section id={id} className="mb-6">
      <p className="mb-4">{title}</p>
      <div className="duration-900 -mb-[8px] rounded-t border border-primary/30 px-4 py-2 text-right text-xs font-medium text-primary transition-all ease-in-out">
        {filename}
      </div>
      {code && (
        <PrismLoader
          code={code}
          language="typescript"
          withExample={!!example}
        />
      )}
      {example && (
        <div className="duration-900 -mt-[8px] flex justify-center rounded-b border border-primary/30 bg-primary/10 p-4 transition-all ease-in-out">
          {example}
        </div>
      )}
    </section>
  );
};

export default CodeSection;
