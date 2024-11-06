"use client";
import { Oswald } from "next/font/google";
import Toc from "./docs/toc";
import Header from "./docs/header";
import Hero from "./docs/hero";
import Features from "./docs/features";
import Demo from "./docs/demo";
import Setup from "./docs/setup";
import Usage from "./docs/usage";
import License from "./docs/license";
import "./styles.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});

const Page: React.FC = () => {
  const StyledHeading: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <h2
      className={`${oswald.className} duration-900 mb-4 pt-3 text-3xl text-primary transition-all ease-in-out`}
    >
      {children}
    </h2>
  );

  return (
    <div className="test flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <section className="flex items-center justify-center">
          <div className="container flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-3/4">
              <div className="duration-900 my-4 rounded border-[1px] border-primary/30 bg-secondary/5 p-6 transition-all ease-in-out dark:bg-secondary/15">
                <Features heading={StyledHeading} title="Features" />
                <Demo heading={StyledHeading} title="Live Demo" />
                <Setup heading={StyledHeading} title="Setup" />
                <Usage heading={StyledHeading} title="Usage" />
                <License heading={StyledHeading} title="License" />
              </div>
            </div>
            <div className="lg:w-1/4">
              <Toc />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
