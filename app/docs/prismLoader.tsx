"use client";
import { useRef, useState, useLayoutEffect } from "react";
import Prism from "prismjs";
import { Inter } from "next/font/google";

import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

const inter = Inter({ subsets: ["latin"] });

interface PrismLoaderProps {
  code: string;
  language: string;
  withExample: boolean;
}

const PrismLoader: React.FC<PrismLoaderProps> = ({
  code,
  language,
  withExample,
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
    if (isClient && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [isClient, code, language]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`${inter.className} with-tabs text-base font-semibold  ${
        withExample ? "with-example" : ""
      }`}
    >
      <pre className={`language-${language}`} data-indent="0" tabIndex={0}>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default PrismLoader;
