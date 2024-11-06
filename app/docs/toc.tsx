import { Link } from "react-scroll";

const Toc = () => {
  const headings = [
    { id: "features", title: "Features" },
    { id: "demo", title: "Live Demo" },
    { id: "setup", title: "Setup" },
    { id: "usage", title: "Usage" },
    { id: "license", title: "License" },
  ];

  return (
    <section className="sticky top-[80px] z-0 p-4">
      <h6 className="text-md mb-3 font-semibold">Table of Contents</h6>
      <div className="toc">
        <ul>
          {headings.map(({ id, title }) => (
            <li key={id}>
              <Link
                activeClass="text-secondary font-semibold"
                className={`duration-900 cursor-pointer text-primary transition-all ease-in-out hover:text-secondary`}
                to={id}
                spy={true}
                smooth={true}
                duration={100}
                offset={-80}
                href={`#${id}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Toc;
