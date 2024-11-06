import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <h1
      className={`${oswald.className} hero duration-900 border border-b-2 border-secondary bg-gray-100 pb-4 pt-2 text-center text-white transition-all ease-in-out dark:text-gray-950`}
    >
      <span className="text-[33px]">A User-Defined Color Scheme</span>
      <br />
      <span className="text-[20px]">for Next.js &amp; Tailwind Apps</span>
    </h1>
  );
};
export default Hero;
