import React from "react";
import useCodeSnippets from "../hooks/useCodeSnippets";
import CodeSection from "./codeSection";
import { Element } from "react-scroll";

interface UsageProps {
  heading: React.ElementType;
  title: string;
}

const Usage: React.FC<UsageProps> = ({ heading: Heading, title }) => {
  const { codeSnippets } = useCodeSnippets();

  return (
    <Element name="usage">
      <section>
        <Heading>{title}</Heading>
        <CodeSection
          id="addThemerComponent"
          title="To use the NextTailwindThemer in your application, simply add it to the appropriate parent component. The themer will most commonly be added to a header component."
          snippetKey="addThemerComponent"
          filename="header.tsx"
          codeSnippets={codeSnippets}
        />
        <CodeSection
          id="currentButton"
          title="Next, update the classNames of the UI elements that you'd like to match the chosen theme. You can replace any Tailwind color-definition class with `primary` or `secondary` to synchronize an element&rsquo;s color with the selected theme. For example if your current button is:"
          snippetKey="currentButton"
          filename="Current Button"
          codeSnippets={codeSnippets}
          example={
            <button className="duration-900 rounded bg-emerald-400 p-2 font-medium text-slate-50 transition-all ease-in-out hover:bg-emerald-300 dark:text-slate-900">
              Click me
            </button>
          }
        />
        <CodeSection
          id="updatedButton"
          title="And you want it to adhere to the themer, update your button's color classNames as such:"
          snippetKey="updatedButton"
          filename="Updated Button"
          codeSnippets={codeSnippets}
          example={
            <button className="duration-900 rounded bg-primary p-2 font-medium text-slate-50 transition-all ease-in-out hover:bg-secondary dark:text-slate-900">
              Click me
            </button>
          }
        />
      </section>
    </Element>
  );
};

export default Usage;
