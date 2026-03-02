import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import modifyClassNames from "@/utils/styling/modifyClassNames";
import Link from "next/link";

const defaultClassNames = {
    main: ["sticky", "top-0", "z-10", "border-b", "border-black"],
    wrapper: ["flex", "flex-wrap", "justify-between", "items-center", "py-4"],
    logo: ["text-[125%]", "font-medium"],
    name: [],
    version: ["text-gray-500", "ml-2", "text-[50%]"],
    ul: ["flex", "flex-wrap", "justify-end"],
    li: ["ml-8", "list-none"],
    link: [],
}

export default function Navbar({ styling, data, ...extraProps }) {
  return (
    <nav
      className={`${
        modifyClassNames(defaultClassNames.main, styling?.tailwind?.main) ||
        defaultClassNames.main.join(" ")
      }`}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      <SectionWrapper styling={styling?.sectionWrapper}>
        <section
          className={`${
            modifyClassNames(
              defaultClassNames.wrapper,
              styling?.tailwind?.wrapper
            ) || defaultClassNames.wrapper.join(" ")
          }`}
          style={styling?.vanilla?.wrapper}
        >
          <span
            className={`${
              modifyClassNames(
                defaultClassNames.logo,
                styling?.tailwind?.logo
              ) || defaultClassNames.logo.join(" ")
            }`}
            style={styling?.vanilla?.logo}
          >
            <Link
              href={"/"}
              className={`${
                modifyClassNames(
                  defaultClassNames.name,
                  styling?.tailwind?.name
                ) || defaultClassNames.name.join(" ")
              }`}
              style={styling?.vanilla?.name}
            >
              {data.name}
            </Link>
            <span
              className={`${
                modifyClassNames(
                  defaultClassNames.version,
                  styling?.tailwind?.version
                ) || defaultClassNames.version.join(" ")
              }`}
              style={styling?.vanilla?.version}
            >
              {data.version}
            </span>
          </span>
          <ul
            className={`${
              modifyClassNames(defaultClassNames.ul, styling?.tailwind?.ul) ||
              defaultClassNames.ul.join(" ")
            }`}
            style={styling?.vanilla?.ul}
          >
            {data.navbarLinks.map((navbarLink, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    modifyClassNames(
                      defaultClassNames.li,
                      styling?.tailwind?.li
                    ) || defaultClassNames.li.join(" ")
                  }`}
                  style={styling?.vanilla?.li}
                >
                  <Link
                    href={navbarLink.value}
                    className={`${
                      modifyClassNames(
                        defaultClassNames.link,
                        styling?.tailwind?.link
                      ) || defaultClassNames.link.join(" ")
                    }`}
                    style={styling?.vanilla?.link}
                  >
                    {navbarLink.key}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </SectionWrapper>
    </nav>
  );
}
