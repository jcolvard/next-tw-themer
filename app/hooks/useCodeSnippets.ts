import { useState, useEffect } from "react";

export interface CodeSnippets {
  yarn: string;
  npm: string;
  pnpm: string;
  nextThemes: string[];
  tailwindConfig: string[];
  [key: string]: string | string[];
}

interface UseCodeSnippetsReturn {
  codeSnippets: CodeSnippets;
  error: Error | null;
}

const useCodeSnippets = (): UseCodeSnippetsReturn => {
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippets>({
    yarn: "",
    npm: "",
    pnpm: "",
    nextThemes: [],
    tailwindConfig: [],
  });
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    import("../docs/data/codeSnippets.json")
      .then((data) => {
        setCodeSnippets(data.default);
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, []);

  return { codeSnippets, error };
};

export default useCodeSnippets;
